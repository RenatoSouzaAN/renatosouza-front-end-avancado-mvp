"use client";

import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
    const pathname = usePathname();
    const { cart } = useCart();
    const [animationKey, setAnimationKey] = useState(0);
    const [previousCount, setPreviousCount] = useState(0);

    const cartItemCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    useEffect(() => {
        if (cartItemCount > previousCount) {
            setAnimationKey((prev) => prev + 1);
        }
        setPreviousCount(cartItemCount);
    }, [cartItemCount, previousCount]);

    return (
        <header className="bg-primary text-on-primary py-8 w-full">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <Link href="/">
                    <h1 className="text-4xl font-bold">DMarket</h1>
                </Link>
                <div className="flex items-center space-x-4">
                    {pathname !== "/cart" && (
                        <Link href="/cart" className="relative">
                            <button className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100 flex items-center">
                                <ShoppingCartCheckoutIcon className="mr-2" />{" "}
                                Carrinho
                            </button>
                            {cartItemCount > 0 && (
                                <span
                                    key={animationKey}
                                    className="absolute -top-2 -right-2 bg-primary-container text-on-primary-container rounded-full w-6 h-6 flex items-center justify-center text-xs border animate-pop leading-none"
                                >
                                    {cartItemCount > 9 ? "9+" : cartItemCount}
                                </span>
                            )}
                        </Link>
                    )}
                    <button className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100 flex items-center">
                        <AccountCircleIcon className="mr-2" /> Login
                    </button>
                </div>
            </div>
            <style jsx global>{`
                @keyframes pop {
                    0% {
                        transform: scale(0.8);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .animate-pop {
                    animation: pop 0.3s ease-in-out;
                }
            `}</style>
        </header>
    );
};

export default Header;
