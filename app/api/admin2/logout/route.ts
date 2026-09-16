import {deleteCurrentAdminSession} from "@/app/lib/admin2-auth";
import {NextResponse} from "next/server";

export async function POST() {
    try {
        await deleteCurrentAdminSession()
    } catch (error) {
        // console.error("Logout error ", error)
        return NextResponse.json({status: 500, statusText: "Logout error"})
    }
    return NextResponse.json({ok: true})
}