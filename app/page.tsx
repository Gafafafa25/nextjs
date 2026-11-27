import type {Metadata} from "next";
import Image from "next/image";
import ProductsGrid from "@/app/components/ProductsGrid";
import {getProducts} from "@/app/lib/products-db";

export const metadata: Metadata = {
    title: "Main",
    description: "Main page",
};

export default async function MainPage() {
    return (
        <div className="relative overflow-hidden min-h-[600px]">
        {/*<div className="relative overflow-hidden min-h-[600px]">*/}
            {/*<div className="absolute inset-0 z-0">*/}
            {/*    <Image src="/images/wheyBanner.jpg" alt="banner"*/}
            {/*           fill*/}
            {/*           className="object-cover"*/}
            {/*           priority/>*/}
            {/*</div>*/}
            <div className="p-4 gap-3 max-w-3xl mx-auto">
                <ProductsGrid products={await getProducts()}/>
            </div>
            {/*<div className="absolute inset-0 bg-black/50 z-10"/>*/}
        </div>
    );
}
