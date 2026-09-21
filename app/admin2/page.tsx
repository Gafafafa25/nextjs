import Admin2Panel from "@/app/components/Admin2Panel";
import LoginForm from "@/app/components/LoginForm";
import {getCurrentAdmin} from "@/app/lib/admin2-auth";
import RegisterForm from "@/app/components/RegisterForm";

export const dynamic = "force-dynamic"

export default async function Admin2Page() {
    const admin = await getCurrentAdmin()
    if (!admin) {
        return <RegisterForm/>
        // return <LoginForm/>
    }
    return (
        <Admin2Panel/>
    )
}