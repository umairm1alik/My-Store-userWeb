import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import UserProductReducer from "../Store/UserProductReducers/UserProductReducer";



import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))



const Store= configureStore({
    reducer:{
        UserProductReducer
    },
    composedEnhancer
});

export default Store;