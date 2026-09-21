import {Product} from "@/app/types/product";

export function ProductCard({product}: {product: Product }) {
    return (
        <div key={product.id}>
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <img src={product.image}
                 alt={product.name}
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <span className="text-xl font-bold text-gray-800">{product.price}</span>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {/*later todo: delete button for product?*/}
            {/*<button*/}
            {/*    // onClick={handleAdd}*/}
            {/*    className={`w-full py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200*/}
            {/*    bg-black text-white hover:bg-gray-700 hover:shadow-md`}>Add*/}
            {/*</button>*/}
        </div>
    )
}