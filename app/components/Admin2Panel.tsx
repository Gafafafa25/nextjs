"use client"

import {FormEvent, useEffect, useState} from "react";
import {createId, getProducts} from "@/app/lib/products";
import {Product} from "@/app/types/product";
import ProductsGrid from "@/app/components/ProductsGrid";
import RegisterForm from "@/app/components/RegisterForm";
import ProductForm from "@/app/components/ProductForm";
import {useIntersection} from "next/dist/client/use-intersection";
import AdminAccess from "@/app/components/AdminAccess";
import ManagerAccess from "@/app/components/ManagerAccess";

// const emptyForm = {
//     name: "",
//     price: 0,
//     image: "", //todo: path
//     description: ""
// }


export default function Admin2Panel({login, role}: { login: string, role: string }) {
    // const [form, setForm] = useState(emptyForm)
    const [products, setProducts] = useState<Product[]>(getProducts())

    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const product: Product = {
    //         id: createId(),
    //         name: form.name,
    //         price: Number(form.price),
    //         image: form.image,
    //         description: form.description
    //     }
    //     //todo:
    // }

    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [showProductForm, setShowProductForm] = useState(false)

    return (
        <main>
            <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Admin Panel</h1>
                <div className="mb-6">
                    <p className="text-3xl font-bold mb-8 text-gray-900">Hello, {login}! Access: {role}</p>
                </div>
                {/*for admin*/}
                <div>
                    {role === 'admin' && (
                        <AdminAccess/>
                    )}
                </div>
                <div>
                    {role === 'manager' && (
                        <ManagerAccess/>
                    )}
                </div>
                {/*todo: intern*/}


            </section>
            <article className="container max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Products</h2>
                </div>
                <ProductsGrid products={products}/>
            </article>
        </main>
    )
}