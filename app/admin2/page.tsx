import LoginForm from "@/app/components/LoginForm";
import {getCurrentAdmin} from "@/app/lib/admin2-auth";
import Admin2Panel from "@/app/components/Admin2Panel";


export const dynamic = "force-dynamic"

export default async function Admin2Page() {
    const admin = await getCurrentAdmin()
    if (!admin) {
        return <LoginForm/>
    }
    return (
        <Admin2Panel login={admin.login} role={admin.role}/>
    )

}