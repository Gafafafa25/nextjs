'use client';

import {FormEvent, useEffect, useState} from "react";
import type {Product} from "@/app/types/product";
import {getProducts} from "@/app/lib/products";

const emptyForm = {
    name: "",
    price: "",
    image: "", //todo: path
    description: ""
}

function AdminPage() {
    const [form, setForm] = useState(emptyForm)
    // const [loading, setLoading] = useState(false)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //todo: сформировать объект типа Product и вывести сообщение что сохранено
    }
    // const [products, setProducts] = useState<Product[]>([])
    const [products, setProducts] = useState<Product[]>([
        {
            "id": "p1",
            "name": "scrub",
            "price": 2000,
            "image": "/images/scrub.png",
            "description": "scrub description"
        }
    ])

    useEffect(() => {
        setProducts(getProducts())
    }, [])

    return (
        <main>
            <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Admin</h1>
                <p className="text-lg text-gray-700 leading-relaxed">Add product:</p>
                <form onSubmit={handleSubmit} className="space-y-2">
                    {/*todo: input - required, label, placeholder for price and others */}
                    <label className="block text-sm font-medium text-gray-700">Name
                        <input type="text" value={form.name}
                               onChange={(e) => {
                                   setForm({...form, name: e.target.value})
                               }}
                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                               disabled:cursor-not-allowed"
                               required/>
                    </label>
                    <label className="block text-sm font-medium text-gray-700">Image path
                        <input type="text" value={form.image}
                               onChange={(e) => {
                                   setForm({...form, image: e.target.value})
                               }}
                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                               disabled:cursor-not-allowed"
                               required/>
                    </label>
                    <label className="block text-sm font-medium text-gray-700">Description
                        <input type="text" value={form.description}
                               onChange={(e) => {
                                   setForm({...form, description: e.target.value})
                               }}
                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                               disabled:cursor-not-allowed"
                               required/>
                    </label>
                    <label className="block text-sm font-medium text-gray-700">Price
                        <input type="text" value={form.price}
                               onChange={(e) => {
                                   setForm({...form, price: e.target.value})
                               }}
                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50
                               disabled:cursor-not-allowed"
                               required/>
                    </label>
                    <button
                        type="submit"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700
                        hover:bg-gray-50 hover:border-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Save
                        {/*{loading ? 'Saving...' : 'Save'}*/}
                    </button>
                </form>
            </section>
            <section>
                <h2>Products</h2>
                <div>
                    {products.map((product: Product) => (
                        <div key={product.id}>
                            Name {product.name} {product.price}
                            <img src={product.image} alt={product.name}/>
                            Description {product.description}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default AdminPage;