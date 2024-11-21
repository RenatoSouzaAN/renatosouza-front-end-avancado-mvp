"use client";

import { CartProvider } from "@/contexts/CartContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import Header from "@/components/Header";

export function ClientLayout({ children }) {
    return (
        <NotificationProvider>
            <CartProvider>
                <Header />
                <main>{children}</main>
            </CartProvider>
        </NotificationProvider>
    );
}
