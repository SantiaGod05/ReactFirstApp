import ProductCard from "./ProductCard"
import {collection, getDocs, getFirestore, } from "firebase/firestore"
import { useEffect, useState } from "react"

const Products = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])
    
    const getItems = () => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'items')
        getDocs( itemsCollection ).then( snapshot => {
            const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
            console.log(data.id)
            setItems(data)
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
        <div className="flex flex-row w-screen justify-around">

            {/* <ProductCard title='a' precio='26' img='./du' desc=''/> */}
            
        </div>
    </div>
)
}
export default Products