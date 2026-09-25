import {NextResponse} from "next/server";
import {addProduct} from "@/app/lib/products-db";

export async function POST(request: Request) {
    let body: unknown
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({status: 400, statusText: "Invalid Request1"})
    }
    if (body === null || typeof body !== 'object') {
        return NextResponse.json({status: 400, statusText: "Invalid Request2"})
    }
    if (!("id" in body) || !("name" in body) || !("price" in body) || !("image" in body) || !("description" in body)) {
        return NextResponse.json({status: 400, statusText: "Invalid Request3"})
    }
    // check type of body.price === numeric or number or string ?
    if (typeof body.id !== "string" || typeof body.name !== "string" || typeof body.price !== "number"
        || typeof body.image !== "string" || typeof body.description !== "string") {
        return NextResponse.json({status: 400, statusText: "Invalid Request4"})
    }

    const product = await addProduct(body.id, body.name, body.price, body.image, body.description)
    if (!product) {
        return NextResponse.json({status: 400, statusText: "Invalid Request5"})
    }
    return NextResponse.json({id: product.id, name: product.name, ok: true})
}