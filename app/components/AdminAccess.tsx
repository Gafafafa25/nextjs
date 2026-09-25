"use client"

import {useState} from "react";
import RegisterForm from "@/app/components/RegisterForm";
import ProductForm from "@/app/components/ProductForm";

export default function AdminAccess() {
    const [showRegisterForm, setShowRegisterForm] = useState(true)
    const [showProductForm, setShowProductForm] = useState(false)

    return (
        <main>
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
                <button type="button"
                        onClick={() => {
                            setShowProductForm(false)
                            setShowRegisterForm(!showRegisterForm)
                        }}>Add user
                </button>
                <button type="button" onClick={() => {
                    setShowRegisterForm(false)
                    setShowProductForm(!showProductForm)
                }}>Add product
                </button>
            </div>
            <div>
                {showRegisterForm && (
                    <RegisterForm/>
                )}
                {showProductForm && (
                    <ProductForm/>
                )}
            </div>
        </main>
    )
}