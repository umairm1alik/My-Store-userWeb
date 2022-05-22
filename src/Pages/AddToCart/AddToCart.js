

import React from 'react'
import UseAddToCart from './UseAddToCart'
export default function AddToCart() {
  const [cartProductFromStore] = UseAddToCart()
  return (
    <div className='container mt-5'>
            <div className='row'>
                {cartProductFromStore.map((product) => {
                    return (
                        <div className='col-md-3' class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.description}</p>
                                <small>{product.price} Rs</small> <br />
                                <a class="btn btn-primary">Remove from Cart</a>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
  )
}
