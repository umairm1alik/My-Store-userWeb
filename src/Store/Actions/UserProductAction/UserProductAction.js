import {db} from "../../../Config/Firebase"




export const fetchProduct = (setLoader) => async(dispatch) =>{
    try {
        setLoader(true)
        let productFetched=await db.collection("Products").get();
        let fetchedCartProduct=await db.collection("productInCart").get();
        let productsFromFirebase=[];
        let cartProductsFromFirebase=[];

        productFetched.forEach((doc) => {
            productsFromFirebase.push({
               docId: doc.id,
               ...doc.data() 
            })
        });

        fetchedCartProduct.forEach((doc) => {
            cartProductsFromFirebase.push({
               docId: doc.id,
               ...doc.data() 
            })
        });

        

        dispatch({
            type: "FETCH_PRODUCT",
            payload: {productsFromFirebase, cartProductsFromFirebase}
        })
    } catch (error) {
        
    }finally{
        setLoader(false)
    }
}

export const addToCartAction =(product) => async(dispatch) =>{

    await db.collection("productInCart").add(product)
}