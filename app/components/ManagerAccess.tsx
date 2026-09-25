import {useState} from "react";
import ProductForm from "@/app/components/ProductForm";

export default function ManagerAccess() {
    const [showProductForm, setShowProductForm] = useState(true)

    return (
        <div>
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
                <button type="button" onClick={() => {
                    setShowProductForm(!setShowProductForm)
                }}>Add product
                </button>
            </div>
            <div>
                {showProductForm && (
                    <ProductForm/>
                )}
            </div>
        </div>
    )
}