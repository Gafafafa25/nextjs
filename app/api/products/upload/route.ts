import {NextResponse} from "next/server";
import {join} from "path";
import {mkdir, writeFile} from "node:fs/promises";

export async function POST(request: Request) {
    let formData: FormData
    // let formData;
    try {
        formData = await request.formData()
    } catch {
        return NextResponse.json({status: 400, statusText: "Invalid Request1"})
    }

    const files = formData.getAll('files') as File[]
    // console.log(files, "files")



    // Простая валидация: только файлы, размер ≤ 5 МБ
    for (const file of files) {
        console.log(file, "i")
        const extention = file.type
        if (extention !== "image/jpg" && extention !== "image/jpeg" && extention !== "image/png") {
            return NextResponse.json({status: 400, statusText: "Invalid Request3"})
        }
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                {error: `File ${(file as File).name} is too large and will not be attached.`}, {status: 400}
            )
        }
        const fileName = `${Date.now()}/${extention}`

        const uploadsDir = join(process.cwd(), fileName)

        await mkdir(uploadsDir, {recursive: true})

        const filePath = join(uploadsDir, fileName)

        await writeFile(filePath, Buffer.from(await file.arrayBuffer()))
    }
    return NextResponse.json({files: files, ok: true})
}