import React from 'react'

const initialState={
    products:[''],
    cartProduct:['']
}

export default function UserProductReducer(state=initialState, actions) {
  switch (actions.type) {
      case "FETCH_PRODUCT":{
          return{
              ...state,
              products: actions.payload.productsFromFirebase,
              cartProduct: actions.payload.cartProductsFromFirebase
          }
      }
          
          
  
      default:
          return state;
  }
}
