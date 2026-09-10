import {NextResponse} from "next/server";
import {authenticateAdmin, createAdminSession} from "@/app/lib/admin2-auth";

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({status: 400, statusText: "Invalid Request"})
    }

    if (body === null || typeof body !== 'object') {
        return NextResponse.json({status: 400, statusText: "Invalid Request"})
    }
    if (!("login" in body) || !("password" in body)) {
        return NextResponse.json({status: 400, statusText: "Invalid Request"})
    }
    if (typeof body.login !== "string" || typeof body.password !== "string") {
        return NextResponse.json({status: 400, statusText: "Invalid Request"})
    }

    const admin = await authenticateAdmin(body.login, body.password)
    if (!admin) {
        return NextResponse.json({status: 400, statusText: "Invalid Request"})
    }
    await createAdminSession(admin.id)
    return NextResponse.json({login: admin.login, role: admin.role})
}