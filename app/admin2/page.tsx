import LoginForm from "@/app/components/LoginForm";
import {getCurrentAdmin} from "@/app/lib/admin2-auth";
import Admin2Panel from "@/app/components/Admin2Panel";
import {getProducts} from "@/app/lib/products-db";


export const dynamic = "force-dynamic"

export default async function Admin2Page() {
    const admin = await getCurrentAdmin()
    if (!admin) {
        return <LoginForm/>
    }
    const products = await getProducts()
    if (!products) {
        return (<div><p>No items</p></div>
        )
    }
    return (
        <Admin2Panel login={admin.login} role={admin.role} products={products}/>
    )

}