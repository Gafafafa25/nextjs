import {pool} from "@/app/lib/db";
import {Product} from "@/app/types/product";

export async function getProducts(): Promise<Product[]> {
    const result = await pool.query('SELECT * FROM products');
    // console.log(result, "result");
    return result.rows
}

export async function addProduct(id: string, name: string, price: number, image: string, description: string) {
    const result = await pool.query('' +
        'INSERT INTO products (id, name, price, image, description)' +
        'values ($1, $2, $3, $4, $5)', [id, name, price, image, description])
    return result.rows[0]
}