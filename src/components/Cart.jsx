import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

const EmptyCart = () => {
    return (
        <section className="hero min-h-screen bg-base-200" >
            <div className="hero-content text-center flex-col">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Carrito</h1>
                    <p className="py-6">Upa, parece que tu carrito esta vacio <br />Ir a ver los <Link to="/Products" className="link link-hover font-semibold">Productos</Link></p>
                </div>
            </div>
        </section>
    )
}

// const FullyCart = ( products ) => {
//     return (
//         <ul>
//             { products.map( p => <li key={p.id} >{p.nombre}</li> ) }
//         </ul>
//     )
// }

const Cart = () => {
    const { products } = useCart()

    return (
        <>
            <ul>
                { products.map( p => <li key={p.id} >{p.nombre}</li> ) }
            </ul>
            {/* { products.lenght = 0 ? <EmptyCart /> : <FullyCart products={products} /> } */}
        </>
    )
}
export default Cart

