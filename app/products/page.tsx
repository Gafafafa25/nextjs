import type {Metadata} from "next";
import {Product} from "@/app/types/product";
import ProductsGrid from "@/app/components/ProductsGrid";
import {getProducts} from "@/app/lib/products-db";


export const metadata: Metadata = {
    title: "Products",
    description: "Products page",
};


export default async function ProductsPage() {
    return (
        <div className="p-4 gap-3 max-w-3xl mx-auto">
            <ProductsGrid products={await getProducts()}/>
        </div>
    );
}
