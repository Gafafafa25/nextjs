import {NextResponse} from "next/server";

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({status: 400, statusText: "Invalid Request"})
    }
    //todo: if body not obj return "Invalid Request", if body === null return "Invalid Request",
    // check body has login and password => type string ? obj : "Invalid Request"

    //todo: db request = db has this user ? => check login and password return null | createAdminSession() by id
    // return NextResponse.json({login: body.login, role: body.role})
}