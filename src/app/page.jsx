'use client';
import React, { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";

import { fetchProducts } from "@/utils/productService";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setIsLoading(true);
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                setError(error);
                console.error('Failed to load products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <div className="max-w-7x1 mx-auto py-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Produtos</h2>

            {isLoading && (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-primary border-opacity-50"></div>
                </div>
            )}

            {error && (
                <div className="text-center text-error py-8">Erro ao carregar produtos</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
