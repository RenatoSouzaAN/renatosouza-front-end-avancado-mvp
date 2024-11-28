"use client";
import React, { use, useEffect } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { useCart } from "@/contexts/CartContext";

import { fetchProductById } from "@/utils/productService";

import Breadcrumbs from "@/components/Breadcrumbs";
import QuantityButtons from "@/components/QuantityButtons";
import CartAndBuyButtons from "@/components/CartAndBuyButtons";
import ShareButton from "@/components/ShareButton";
import FavoriteButton from "@/components/Favoritebutton";
import ImageSelector from "@/components/ImageSelector";
import ProductTabs from "@/components/ProductTabs";
import Shipping from "@/components/Shipping";

const ProductPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart, handleBuyNow } = useCart();

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                setIsLoading(true);
                const fetchedProduct = await fetchProductById(id);

                if (!fetchedProduct) {
                    throw new Error("Produto não encontrado");
                }

                setProduct(fetchedProduct);
            } catch (error) {
                setError(error);
                console.error('Failed to load product:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const productBreadcrumbs = product
        ? [
              { label: "Página Inicial", href: "/" },
              { label: product.category, href: "#" },
              { label: product.subcategory, href: "#" },
              { label: product.subsubcategory, href: "#" },
              { label: product.title, href: "#" },
          ]
        : [
              { label: "Página Inicial", href: "/" },
              { label: "Produto Inexistente", href: "#" },
          ];

    return (
        <div className="mx-auto pt-4 pb-10">
            {isLoading && (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-primary border-opacity-50"></div>
                </div>
            )}

            {!isLoading && (error || !product) && (
                <>
                    <Breadcrumbs items={productBreadcrumbs} />

                    <div className="flex justify-center py-8 text-primary">
                        <p>Produto não encontrado</p>
                    </div>
                </>
            )}

            {product && (
                <>
                    <Breadcrumbs items={productBreadcrumbs} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        <section className="flex flex-col gap-3">
                            <div className="aspect-square border rounded-2xl bg-white relative">
                                <Image
                                    src={product.images[selectedImageIndex]}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="contain"
                                    className="w-full h-full border rounded-2xl"
                                />
                            </div>

                            <ImageSelector
                                images={product.images}
                                productTitle={product.title}
                                selectedIndex={selectedImageIndex}
                                onSelectImage={setSelectedImageIndex}
                            />
                        </section>

                        <section className="flex flex-col gap-3">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h1 className="text-4xl font-bold text-primary">
                                        {product.title}
                                    </h1>
                                    <div className="flex gap-2 h-12">
                                        <FavoriteButton
                                            product={product}
                                        ></FavoriteButton>
                                        <ShareButton />
                                    </div>
                                </div>

                                <div className="flex items-baseline justify-between">
                                    <span className="text-4xl font-bold text-primary">
                                        R$ {product.price.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-primary">
                                        Em estoque: {product.stock} Unidades
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col border rounded-lg p-4 gap-6 shadow-md">
                                <div className="flex items-center text-primary">
                                    <span className="mr-2">Quantidade: </span>
                                    <div className="flex items-center justify-between flex-1 border rounded-xl bg-background">
                                        <QuantityButtons
                                            initialQuantity={quantity}
                                            maxQuantity={product.stock}
                                            onQuantityChange={
                                                handleQuantityChange
                                            }
                                            buttonStyles={{
                                                decrease:
                                                    "text-primary hover:bg-gray-100 rounded-tl-xl rounded-bl-xl flex items-center justify-center flex-1",
                                                increase:
                                                    "text-primary hover:bg-gray-100 rounded-tr-xl rounded-br-xl flex items-center justify-center flex-1",
                                            }}
                                            inputStyles="text-on-primary bg-primary flex-1 text-center"
                                            containerStyles="flex items-center flex-1"
                                        />
                                    </div>
                                </div>

                                <Shipping />

                                <div className="">
                                    <CartAndBuyButtons
                                        handleAddToCart={() =>
                                            handleAddToCart(product, quantity)
                                        }
                                        handleBuyNow={() =>
                                            handleBuyNow(product, quantity)
                                        }
                                        product={product}
                                        quantity={quantity}
                                        containerStyles="mb-1"
                                        cartButtonStyles="bg-on-primary text-primary border hover:bg-gray-100"
                                        buyNowButtonStyles="bg-primary text-on-primary hover:bg-on-primary-container"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    <ProductTabs product={product} />
                </>
            )}
        </div>
    );
};

export default ProductPage;
