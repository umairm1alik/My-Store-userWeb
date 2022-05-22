

import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import { fetchProduct } from '../../Store/Actions/UserProductAction/UserProductAction'
import { addToCartAction } from '../../Store/Actions/UserProductAction/UserProductAction'

export default function useCard() {
    const [loader, setLoader]= useState(false)
    const dispatch=useDispatch();

    useEffect(() => {
        
        dispatch(fetchProduct(setLoader))

    }, [])

    let productFromStore= useSelector((store) => store.UserProductReducer.products)

    const cartHandler =(product) =>{
        
        dispatch(addToCartAction(product))
    }
  return ([
      productFromStore, cartHandler
  ])
}
