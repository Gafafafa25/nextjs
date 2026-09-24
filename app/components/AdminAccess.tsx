import {useState} from "react";
import {Product} from "@/app/types/product";
import {getProducts} from "@/app/lib/products";
import RegisterForm from "@/app/components/RegisterForm";
import ProductForm from "@/app/components/ProductForm";
import ProductsGrid from "@/app/components/ProductsGrid";

export default function AdminAccess ({login} : {login: string}) {
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [showProductForm, setShowProductForm] = useState(false)
    const [products, setProducts] = useState<Product[]>(getProducts())

    return (
        <main>
            <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Admin Panel</h1>
                <div className="mb-6">
                    <p className="text-3xl font-bold mb-8 text-gray-900">Hello, {login}! Access: admin</p>
                </div>
                for admin
                <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
                    <button type="button"
                            onClick={() => {
                                setShowProductForm(false)
                                setShowRegisterForm(true)
                            }}>Add user
                    </button>
                    <button type="button" onClick={() => {
                        setShowRegisterForm(false)
                        setShowProductForm(true)
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