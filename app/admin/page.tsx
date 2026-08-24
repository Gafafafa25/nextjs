'use client';

import {useState} from "react";

const emptyForm = {
    name: "",
    price: "",
    image: "", //todo: path
    description: ""
}

function AdminPage() {
    const [form, setForm] = useState(emptyForm)
    const handleSubmit = () => {
        //todo:
    }

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
                    {/*todo: others*/}
                </form>
            </section>
        </main>
    )
}

export default AdminPage;