"use client";
import { useState } from "react";
import OpenInBrowser from "@mui/icons-material/OpenInBrowser";
import Link from "next/link";
import {useCart} from "@/contexts/CartContext";
import Image from "next/image";
import QuantityButtons from "@/components/QuantityButtons";
import CartAndBuyButtons from "@/components/CartAndBuyButtons";

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart, handleBuyNow } = useCart();

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <div className="flex flex-col bg-background border rounded-lg overflow-hidden shadow-md transform motion-safe:hover:scale-105 transition duration-300">
            <Link href={`/products/${product.id}`}>
                <div className="h-60 bg-gray-100 flex items-center justify-center relative">
                    <div className="absolute top-2 right-2 z-10">
                        <OpenInBrowser className="text-primary" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center border-2 border-gray-200">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            layout="fill"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </Link>

            <div className="p-4 bg-primary text-on-primary">
                <h3 className="text-3xl mb-2">{product.title}</h3>
                <p className="text-base mb-2">
                    Preço: R${product.price.toFixed(2)}
                </p>

                <div className="flex items-center mb-3">
                    <span className="mr-2">Quantidade: </span>
                    <QuantityButtons
                        initialQuantity={quantity}
                        maxQuantity={product.stock}
                        onQuantityChange={handleQuantityChange}
                        buttonStyles={{
                            decrease:
                                "text-primary hover:bg-gray-100 rounded-tl-xl rounded-bl-xl flex items-center",
                            increase:
                                "text-primary hover:bg-gray-100 rounded-tr-xl rounded-br-xl flex items-center",
                        }}
                        inputStyles="text-on-primary bg-primary flex items-center"
                        containerStyles="border rounded-xl bg-background flex items-center"
                    />
                </div>

                <div className="flex gap-2 flex-col">
                    <CartAndBuyButtons
                        handleAddToCart={() =>
                            handleAddToCart(product, quantity)
                        }
                        handleBuyNow={() => handleBuyNow(product, quantity)}
                        product={product}
                        quantity={quantity}
                        containerStyles="mb-1"
                        cartButtonStyles="text-primary hover:bg-gray-100"
                        buyNowButtonStyles="text-primary hover:bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
