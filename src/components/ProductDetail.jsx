import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "../contexts/CartContext"

const ProductDetail = () => {

  const {id} = useParams()
  const [item, setItem] = useState([])
  const { addToCart } = useCart

  useEffect(() => {
    getItem()
  }, [])

  const getItem = () => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'items')
    const docRef = doc(itemsCollection, id)
    getDoc( docRef ).then( snapshot => {
        setItem(snapshot.data())
    })
  }

  const addHandler = () => { 
    addToCart( item )
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col">
        <div className="hero-content flex-col lg:flex-row">
          <img src={item.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{item.nombre} </h1>
            <p className="py-6"> {item.descripcion} <br /><strong>${item.precio}</strong></p>
            <button onClick={addHandler} className="btn btn-primary">Añadir al carrito</button>
          </div>
        </div>
        <div className="my-4 self-end">
          <Link to='/Products' className="btn btn-sm md:btn-md btn-ghost gap-2 normal-case  lg:gap-3">
            <svg className="h-6 w-6 fill-current md:h-8 md:w-8">
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
            <div className="flex flex-col items-start" >
              <span className="text-base-content/50 hidden text-xs font-normal md:block">Volver</span>
              <span>Productos</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail