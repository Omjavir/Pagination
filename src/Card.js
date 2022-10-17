import React from 'react'
import './Card.css'

const Card = ({ product }) => {

    return (
        <div className='container'>
            {product.map(prod => {
                return <div key={prod.id} className="card">
                    <img src={prod.image} alt="Avatar" style={{ width: "60%", height: "60%" }} />
                    <div className="container-price">
                        <h4><b>${prod.price}</b></h4>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Card