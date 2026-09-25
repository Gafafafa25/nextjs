import AdminAccess from "@/app/components/AdminAccess";
import {getProducts} from "@/app/lib/products-db";
import ManagerAccess from "@/app/components/ManagerAccess";
import ProductsGrid from "@/app/components/ProductsGrid";



// export default async function Admin2Panel({login, role}: { login: string, role: string }) {
export default function Admin2Panel({login, role}: { login: string, role: string }) {
    // const products = await getProducts();
    return (
        <main>
            <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Admin Panel</h1>
                <div className="mb-6">
                    <p className="text-3xl font-bold mb-8 text-gray-900">Hello, {login}! Access: {role}</p>
                </div>
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

            </section>
            <article className="container max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Products</h2>
                </div>
                {/*<ProductsGrid products={products}/>*/}
            </article>
        </main>
    )
}