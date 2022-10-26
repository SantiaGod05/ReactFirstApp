import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({nombre, descripcion, precio, img, id}) => {
  return (
    <Link to={`/detail/${id}`} className="card card-compact w-96 bg-base-100 shadow-xl mx-2 m-10 max-w-[20vw]">
        <figure><img src={img} alt={nombre} /></figure>
        <div className="card-body">
            <h2 className="card-title">{nombre}</h2>
            <p>{descripcion}</p>
            <p>${precio}</p>
        </div>
    </Link>
  )
}

export default ProductCard