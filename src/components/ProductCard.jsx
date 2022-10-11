import React from 'react'

const ProductCard = ({ img, title, desc }) => {
    return (
        <div className='card card-compact w-96 bg-base-100 shadow-xl mx-2'>
            <figure>
                <img src={img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard