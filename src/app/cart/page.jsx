"use client";
import React from "react";

import { useCart } from "@/contexts/CartContext";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductInCart from "@/components/ProductInCart";
import { useRouter } from "next/navigation";
import Shipping from "@/components/Shipping";

const CartPage = () => {
    const router = useRouter();
    const cartBreadcrumbs = [
        { label: "Página Inicial", href: "/" },
        { label: "Carrinho", href: "#" },
    ];

    const { cart, removeFromCart, updateQuantity } = useCart();

    const subTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="mx-auto px-48 md:px-48 pt-4 pb-10">
            <Breadcrumbs items={cartBreadcrumbs} />

            <div className="grid grid-cols-12 gap-8 mt-4">
                <section className="flex flex-col gap-3 col-span-8">
                    <div className="flex flex-col gap-6 border rounded-lg border-primary p-4">
                        <h1 className="text-4xl font-bold text-primary">
                            Meu Carrinho
                        </h1>
                        {cart.length === 0 ? (
                            <p className="text-primary">
                                Seu carrinho está vazio.
                            </p>
                        ) : (
                            cart.map((product) => (
                                <ProductInCart
                                    key={product.id}
                                    product={product}
                                    onRemove={() => removeFromCart(product.id)}
                                    onUpdateQuantity={(newQuantity) =>
                                        updateQuantity(product.id, newQuantity)
                                    }
                                />
                            ))
                        )}
                    </div>
                </section>


                <section className="flex flex-col gap-3 col-span-4">
                    <div className="flex flex-col border rounded-lg border-primary p-4">
                        <Shipping />
                    </div>
                    <div className="flex flex-col border rounded-lg border-primary p-4">
                        <h2 className="text-2xl font-bold text-primary mb-4">
                            Resumo do Pedido
                        </h2>
                        <div className="flex justify-between mb-2 text-primary">
                            <span>Subtotal</span>
                            <span>R$ {subTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 text-primary">
                            <span>Frete</span>
                            <span>R$ 15.90</span>
                        </div>
                        <hr className="h-px my-2 bg-primary border-0 dark:bg-primary"></hr>
                        <div className="flex justify-between mb-2 text-primary">
                            <span>Total</span>
                            <span>R$ {(subTotal() + 15.90).toFixed(2)}</span>
                        </div>
                        <button
                            className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CartPage;
