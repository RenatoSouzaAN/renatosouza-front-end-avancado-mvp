import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

const useCart = () => { 
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product, quantity) => {
        if (quantity <= product.stock) {
            console.log(`Adicionando ao carrinho: ${product.title} (Quantidade: ${quantity})`);
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        } else {
            alert("Quantidade indisponível no estoque");
        }
    };

    const handleBuyNow = (product, quantity) => {
        if (quantity <= product.stock) {
            console.log(`Comprando agora: ${product.title} (Quantidade: ${quantity})`);
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
            // redirect("/checkout");
        } else {
            alert("Quantidade indisponível no estoque");
        }
    };

    return { cart, handleAddToCart, handleBuyNow };
};

export default useCart;