"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import useCart from "@/hooks/useCart";

import mockProducts from "@/mock/products";

import Breadcrumbs from "@/components/Breadcrumbs";
import QuantityButtons from "@/components/QuantityButtons";
import CartAndBuyButtons from "@/components/CartAndBuyButtons";
import ShareButton from "@/components/ShareButton";
import FavoriteButton from "@/components/Favoritebutton";
import ImageSelector from "@/components/ImageSelector";
import ProductTabs from "@/components/ProductTabs";

const ProductPage = () => {
    const { id } = useParams();

    const product = mockProducts.find((product) => product.id === id);

    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart, handleBuyNow } = useCart();

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const increaseQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <div className="mx-auto px-48 md:px-48 pt-4 pb-10">
            <Breadcrumbs product={product} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <section className="flex flex-col gap-3">
                    <div className="aspect-square border rounded-2xl bg-background relative">
                        <Image
                            src={product.images[selectedImageIndex]}
                            alt={product.title}
                            layout="fill"
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
                            <div className="flex gap-2">
                                <FavoriteButton
                                    product={product}
                                ></FavoriteButton>
                                <ShareButton product={product}></ShareButton>
                            </div>
                        </div>

                        <div className="flex items-baseline justify-between">
                            <span className="text-3xl font-bold text-primary">
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
                                    quantity={quantity}
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
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

                        <div className="flex flex-col gap-3">
                            <label className="block text-primary text-sm font-medium">
                                Calcular frete e prazo de entrega:
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Digite seu CEP"
                                    className="flex-1 px-3 py-2 border rounded-lg"
                                />
                                <button className="px-4 py-2 bg-primary text-white rounded-lg">
                                    Calcular
                                </button>
                            </div>
                        </div>

                        <div className="">
                            <CartAndBuyButtons
                                handleAddToCart={handleAddToCart}
                                handleBuyNow={handleBuyNow}
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
        </div>
    );
};

export default ProductPage;
