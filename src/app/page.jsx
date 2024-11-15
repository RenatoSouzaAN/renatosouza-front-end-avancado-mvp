import React from "react";
import ProductCard from "@/components/ProductCard";
import mockProducts from "@/mock/products";

export default function Home() {
  return (
    <div className="max-w-7x1 mx-auto px-48 py-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Produtos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
