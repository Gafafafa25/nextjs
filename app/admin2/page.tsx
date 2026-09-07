import Admin2Panel from "@/app/components/Admin2Panel";
import LoginForm from "@/app/components/Admin2Panel";
import {getCurrentAdmin} from "@/app/lib/admin2-auth";

export const dynamic = "force-dynamic"

export default async function Admin2Page() {
    const admin = await getCurrentAdmin()
    if (!admin) {
        return <LoginForm/>
    }
    return (
        <Admin2Panel/>

    )
}