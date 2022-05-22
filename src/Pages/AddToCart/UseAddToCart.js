

import React from 'react'
import { useSelector } from 'react-redux'

export default function UseAddToCart() {

    const cartProductFromStore= useSelector((store) => store.UserProductReducer.cartProduct)


  return ([
      cartProductFromStore
  ])
}
