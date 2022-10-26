import ProductCard from "./ProductCard"
import {collection, getDocs, getFirestore, } from "firebase/firestore"
import { useEffect, useState } from "react"

const Products = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems()
    }, [])
    
    const getItems = () => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')
        getDocs( itemsCollection ).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
            setItems(data)
            setLoading(false)
        })
    }

    console.table(items)
    return (
        <div className="flex flex-col items-center min-h-screen bg-base-200 w-full ">
            <div className="text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold py-10">Nuestros productos</h1>
                </div>
            </div>
            <div className="grid grid-cols-4 mx-5">
                { loading ? <h2 className="text-center font-semibold text-3xl" >Cargando...</h2> : items.map( p => <ProductCard key={p.id} {...p} /> ) }
            </div>
        </div>
    )
}
export default Products