import {Product} from "@/app/types/product";
import {ProductCard} from "@/app/components/ProductCard";
import React from "react";

export default function ProductsGrid({products}: { products: Product[] }) {
    return (
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product}/>
                    )
                )}
            </div>
        </main>
    )
}