


import React from 'react'

export default function Signup() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-10'>
          <label for="name">Enter Your Name</label>
          <input id='name' type="text"/> <br/>
          <label for="email">Enter Your Email</label>
          <input id='email' type="email"/> <br/>
          <label for="country">Enter Your Country</label>
          <input id='country' type="text"/> <br/>
          <label for="password">Enter Password</label>
          <input id='password' type="password"/> <br/>
          <label for="conPassword">Confirm Password</label>
          <input id='conPassword' type="password"/>
          <button>Signup</button>
        </div>
      </div>
    </div>
  )
}
