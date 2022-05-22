
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from '../Pages/Home/Home';
import AddToCart from '../Pages/AddToCart/AddToCart';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';

import Header from '../Components/Header/Header';


export default function Routing() {
  return (
     <Router>

         <Header/>

         <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/addtocart' element={<AddToCart/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/signup' element={<Signup/>}/> 
         </Routes>
     </Router>
  )
}
