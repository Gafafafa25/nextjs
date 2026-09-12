import {NextResponse} from "next/server";
import {authenticateAdmin, createAdminSession} from "@/app/lib/admin2-auth";

export async function POST(request: Request) {
    let body: unknown;
    // console.log(await request.json(), "req1");
    try {
        body = await request.json()
        console.log(body, " body")
    } catch {
        return NextResponse.json({status: 400, statusText: "Invalid Request1"})
    }

    if (body === null || typeof body !== 'object') {
        return NextResponse.json({status: 400, statusText: "Invalid Request2"})
    }
    if (!("login" in body) || !("password" in body)) {
        return NextResponse.json({status: 400, statusText: "Invalid Request3"})
    }
    if (typeof body.login !== "string" || typeof body.password !== "string") {
        return NextResponse.json({status: 400, statusText: "Invalid Request4"})
    }

    const admin = await authenticateAdmin(body.login, body.password)
    if (!admin) {
        return NextResponse.json({status: 400, statusText: "Invalid Request5"})
    }
    await createAdminSession(admin.id)
    return NextResponse.json({login: admin.login, role: admin.role, ok: true})
}