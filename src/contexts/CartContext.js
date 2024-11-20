"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const router = useRouter();

    const handleAddToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex >= 0) {
                const existingProduct = prevCart[existingProductIndex];
                const newQuantity = existingProduct.quantity + quantity;

                if (newQuantity <= product.stock) {
                    const updatedCart = [...prevCart];
                    updatedCart[existingProductIndex] = {
                        ...existingProduct,
                        quantity: newQuantity,
                    };
                    return updatedCart;
                } else {
                    alert("Quantidade indisponível no estoque");
                    return prevCart;
                }
            } else {
                if (quantity <= product.stock) {
                    return [...prevCart, { ...product, quantity }];
                } else {
                    alert("Quantidade indisponível no estoque");
                    return prevCart;
                }
            }
        });

        console.log(
            `Adicionando ao carrinho: ${product.title} (Quantidade: ${quantity})`
        );
    };

    const handleBuyNow = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex >= 0) {
                const existingProduct = prevCart[existingProductIndex];
                const newQuantity = existingProduct.quantity + quantity;

                if (newQuantity <= product.stock) {
                    const updatedCart = [...prevCart];
                    updatedCart[existingProductIndex] = {
                        ...existingProduct,
                        quantity: newQuantity,
                    };
                    return updatedCart;
                } else {
                    alert("Quantidade indisponível no estoque");
                    return prevCart;
                }
            } else {
                if (quantity <= product.stock) {
                    return [...prevCart, { ...product, quantity }];
                } else {
                    alert("Quantidade indisponível no estoque");
                    return prevCart;
                }
            }
        });

        console.log(
            `Comprando agora: ${product.title} (Quantidade: ${quantity})`
        );
        router.push("/cart");
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                handleAddToCart,
                handleBuyNow,
                removeFromCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
