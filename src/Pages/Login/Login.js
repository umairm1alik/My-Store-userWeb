


import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='container '>
      <div className='row loginForm'>
        <div className='col-sm-8  bg-secondary'>
            <form className='d-flex justify-content-center align-items-center'>
              <input type="text" placeholder="Enter Your Email"/> <br/> <br/>
              <input type="password" placeholder="Enter Password"/>
              <button className='mx-2 btnLogin'>Login</button>
              
            </form>

            <p className='mx-auto'>Don't have an account? <Link to="/signup">Signup</Link></p>
          
        </div>
      </div>
    </div>
  )
}
