"use client";

import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";

export function ClientLayout({ children }) {
    return (
      <CartProvider>
            <Header/>
            <main>{children}</main>
        </CartProvider>
    );
}
