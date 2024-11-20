"use client";
import { CartProvider } from "@/contexts/CartContext";

export function ClientLayout({ children }) {
  return (
    <CartProvider>
      <main>{children}</main>
    </CartProvider>
  );
}