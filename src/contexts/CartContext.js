"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useNotification } from "./NotificationContext";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const router = useRouter();
    const { addNotification } = useNotification();

    const handleAddToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex >= 0) {
            const existingProduct = cart[existingProductIndex];
            const newQuantity = existingProduct.quantity + quantity;

            if (newQuantity <= product.stock) {
                const updatedCart = [...cart];
                updatedCart[existingProductIndex] = {
                    ...existingProduct,
                    quantity: newQuantity,
                };

                addNotification(
                    `${product.title} adicionado ao carrinho (Quantidade: ${newQuantity})`,
                    "success"
                );

                setCart(updatedCart);
            } else {
                addNotification(
                    "Quantidade indisponível no estoque",
                    "warning"
                );
                setCart(cart);
            }
        } else {
            if (quantity <= product.stock) {
                addNotification(
                    `${product.title} adicionado ao carrinho (Quantidade: ${quantity})`,
                    "success"
                );
                setCart([...cart, { ...product, quantity }]);
            } else {
                addNotification(
                    "Quantidade indisponível no estoque",
                    "warning"
                );
                setCart(cart);
            }
        }
    };

    const handleBuyNow = (product, quantity) => {
        const existingProductIndex = cart.findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex >= 0) {
            const existingProduct = cart[existingProductIndex];
            const newQuantity = existingProduct.quantity + quantity;

            if (newQuantity <= product.stock) {
                const updatedCart = [...cart];
                updatedCart[existingProductIndex] = {
                    ...existingProduct,
                    quantity: newQuantity,
                };
                setCart(updatedCart);
            } else {
                addNotification(
                    "Quantidade indisponível no estoque",
                    "warning"
                );
                setCart(cart);
            }
        } else {
            if (quantity <= product.stock) {
                setCart([...cart, { ...product, quantity }]);
            } else {
                addNotification(
                    "Quantidade indisponível no estoque",
                    "warning"
                );
                setCart(cart);
            }
        }
        router.push("/cart");
    };

    const removeFromCart = (productId) => {
        const removedProduct = cart.find((item) => item.id === productId);

        if (removedProduct) {
            addNotification(
                `${removedProduct.title} removido do carrinho`,
                "info"
            );
        }

        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart(
            cart.map((item) => {
                if (item.id === productId) {
                    addNotification(
                        `${item.title} atualizado no carrinho (Quantidade: ${newQuantity})`,
                        "info"
                    );
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
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
