import React from "react";
import '@/app/globals.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-primary text-on-primary py-8">
            <div className="mx-auto px-48">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl font-bold">DMarket</h1>
                    </Link>
                    <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100 flex items-center">
                        <ShoppingCartCheckoutIcon className="mr-2"/> Carrinho
                    </button>
                    <button className="px-4 py-2 bg-on-primary text-primary rounded-lg hover:bg-gray-100 flex items-center">
                        <AccountCircleIcon className="mr-2"/> Login
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;