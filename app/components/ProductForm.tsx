"use client"

import {FormEvent, useState} from "react";
import {Product} from "@/app/types/product";
import {createId} from "@/app/lib/products";

const emptyForm = {
    name: "",
    price: 0,
    image: "", //todo: path
    description: ""
}

export default function ProductForm() {
    const [form, setForm] = useState(emptyForm)
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const product: Product = {
            id: createId(),
            name: form.name,
            price: Number(form.price),
            image: form.image,
            description: form.description
        }

        const response = await fetch("/api/products/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
       const data = await response.json()

        alert("added product")
        setForm(emptyForm)
        if (!data.ok) {
            setMessage("Addition error")
        }
        else {
            setMessage("Addition success")
            setForm(emptyForm)
        }
        //add =>
        // router.refresh()
}

return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Add product</h1>
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
    </div>
)
}