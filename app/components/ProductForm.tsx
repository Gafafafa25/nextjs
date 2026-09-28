"use client"

import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {Product} from "@/app/types/product";
import {createId} from "@/app/lib/products";

const emptyForm = {
    name: "",
    price: 0,
    image: "",
    description: ""
}

export default function ProductForm() {
    const [form, setForm] = useState(emptyForm)
    const [message, setMessage] = useState("")
    // const [file, setFile] = useState<File | null>(null)
    const [files, setFiles] = useState<File[] | null>(null)
    // const [files, setFiles] = useState<FileList | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        if (e.target.files) {
            console.log("+")
            setFiles(Array.from(e.target.files))
        }
        console.log('Выбрано файлов:', e.target.files.length);
        Array.from(e.target.files).forEach((file) => {
            console.log('-', file.name, '(', file.size, 'байт)');
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!files || files.length === 0) return;
        const uploadData = new FormData()
        // const filesArray = Array.from(files) as File[]
        // files.forEach((file) => {
        //     uploadData.append('files', file);
        // });

        Array.from(files).forEach((file) => {
            uploadData.append('files', file);
        });

        // filesArray.forEach((file) => {
        //     uploadData.append('files', file);
        // });

        // Array.from(files).forEach(file => {
        //     uploadData.append('files', file)
        // })
        // uploadData.append("file", file)
        console.log(uploadData, "uploadData")

        const uploadResponse = await fetch("/api/products/upload", {
            method: "POST",
            body: uploadData
        })
        const uploadResult = await uploadResponse.json()
        console.log(uploadResult, " res upload")
        if (!uploadResult) {
            setMessage(uploadResult.error)
        }

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
        } else {
            setMessage("Addition success")
            setForm(emptyForm)
        }
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
                <label className="block text-sm font-medium text-gray-700">Add image
                    <input
                        type="file"
                        // accept="image/*"
                        multiple
                        accept=".jpeg,.jpg,.png"
                        ref={fileInputRef}
                        onChange={handleChange}
                        // onChange={(e) => {
                        //     setFile(e.target.files?.[0] ?? null)
                        // }}
                        className="text-sm text-gray-500 file:border-0 file:bg-emerald-50 file:text-emerald-700 file:py-2.5
                        file:px-5 file:rounded-xl file:font-bold file:cursor-pointer hover:file:bg-emerald-100 hover:file:text-emerald-900
                         focus:outline-none focus:ring-2 focus:ring-emerald-200"
                        required/>
                </label>
                {files && (
                    <div className="mt-4 text-sm text-gray-600">
                        Выбрано файлов: {files.length}
                    </div>
                )}
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