"use client"

import {FormEvent, useState} from "react";
import {createId, getProducts} from "@/app/lib/products";
import {Product} from "@/app/types/product";

const emptyForm = {
    name: "",
    price: 0,
    image: "", //todo: path
    description: ""
}


export default function Admin2Panel() {
    const [form, setForm] = useState(emptyForm)
    const [products, setProducts] = useState<Product[]>(getProducts())
    console.log(products, "products")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product: Product = {
            id: createId(),
            name: form.name,
            price: Number(form.price),
            image: form.image,
            description: form.description
        }
    }

    return (
        <main>
            <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Admin</h1>
                <p className="text-lg text-gray-700 leading-relaxed">Add product:</p>
                <form onSubmit={handleSubmit} className="space-y-2">
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
                                   setForm({...form, price: Number(e.target.value)})
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
            <article className="container max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Products</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product: Product) => (
                        <div key={product.id}>
                            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                            <img src={product.image}
                                 alt={product.name}
                                 className="object-cover group-hover:scale-105 transition-transform duration-500"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <span className="text-xl font-bold text-gray-800">{product.price}</span>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            {/*later todo: delete button for product?*/}
                            {/*<button*/}
                            {/*    // onClick={handleAdd}*/}
                            {/*    className={`w-full py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200*/}
                            {/*    bg-black text-white hover:bg-gray-700 hover:shadow-md`}>Add*/}
                            {/*</button>*/}
                        </div>
                    ))}
                </div>
            </article>
        </main>
    )
}