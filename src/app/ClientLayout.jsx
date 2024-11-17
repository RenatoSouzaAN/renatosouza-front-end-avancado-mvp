"use client";
import Header from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";

export function ClientLayout({ children }) {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
    </CartProvider>
  );
}