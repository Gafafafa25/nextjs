"use client"

import {Product} from "@/app/types/product";
import Image from 'next/image';


export function ProductCard({product}: {product: Product }) {
    const baseUrl = "/uploadsDir/"
    const fileName = product.image[0]
    const fullUrl = baseUrl + fileName

    return (
        <article className="flex flex-col max-w-xs h-full w-full gap-4">
            {/*<div key={product.id} className="flex flex-col max-w-xs h-full w-full gap-4">*/}
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <div className="aspect-[4/3] overflow-hidden">
                <Image
                    src={fullUrl}
                    // src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"/>
            </div>
            <span className="text-xl font-bold text-gray-800">{product.price}</span>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {/*later todo: delete button for product?*/}
            <button
                // onClick={handleAdd}
                className={`w-full py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200
                bg-black text-white hover:bg-gray-700 hover:shadow-md`}>Add
            </button>
        </article>
    )
}