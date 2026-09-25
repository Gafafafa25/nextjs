import {NextResponse} from "next/server";
import {createUser} from "@/app/lib/admin2-auth";

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({status: 400, statusText: "Invalid Request1"})
    }

    if (body === null || typeof body !== 'object') {
        return NextResponse.json({status: 400, statusText: "Invalid Request2"})
    }
    if (!("login" in body) || !("password" in body) || !("role" in body)) {
        return NextResponse.json({status: 400, statusText: "Invalid Request3"})
    }
    if (typeof body.login !== "string" || typeof body.password !== "string" || typeof body.role !== "string") {
        return NextResponse.json({status: 400, statusText: "Invalid Request4"})
    }

    const user = await createUser(body.login, body.password, body.role)
    if (!user) {
        return NextResponse.json({status: 400, statusText: "Invalid Request5"})
    }

    return NextResponse.json({login: user.login, role: user.role, ok: true})
}