import {Product} from "@/app/types/product";
import productsData from "../data/products.json";

export function getProducts(): Product[] {
    return productsData;
}

export function createId(): string {
    const symbols: string[] = ['a', 'l', 'g', 'w', '1', '2', '3', '4']
    const result: string[] = []
    for (let i = 0; i < symbols.length; i++) {
        let num: number = Math.floor(Math.random() * symbols.length);
        result.push(symbols[num]);
    }
    return result.join('');
}