import type {Metadata} from "next";
import {Product} from "@/app/types/product";
import ProductsGrid from "@/app/components/ProductsGrid";
import {getProducts} from "@/app/lib/products-db";


export const metadata: Metadata = {
    title: "Products",
    description: "Products page",
};


export default function ProductsPage() {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/*<ProductsGrid products={getProducts()}/>*/}
        </div>
    );
}
