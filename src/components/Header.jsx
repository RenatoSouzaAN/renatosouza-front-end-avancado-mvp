'use client';

import React from "react";
import "@/app/globals.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-primary text-on-primary py-8 w-full">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <Link href="/">
                        <h1 className="text-4xl font-bold">DMarket</h1>
                    </Link>
                    <div className="flex items-center space-x-4">
                        {pathname !== "/cart" && (
                            <Link href="/cart">
                                <button className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100 flex items-center">
                                    <ShoppingCartCheckoutIcon className="mr-2" />{" "}
                                    Carrinho
                                </button>
                            </Link>
                        )}
                        <button className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100 flex items-center">
                            <AccountCircleIcon className="mr-2" /> Login
                        </button>
                    </div>
                </div>
        </header>
    );
};

export default Header;
