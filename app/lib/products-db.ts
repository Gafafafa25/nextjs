import {pool} from "@/app/lib/db";


export async function getProducts() {
    const result = await pool.query('SELECT * FROM products');
    console.log(result, "result");
    // return result.rows
}