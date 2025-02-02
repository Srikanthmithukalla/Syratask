import React from 'react'
import './Loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Enter Name' />
          <input type='email' placeholder='Enter Email' />
          <input type='password' placeholder='Password' />
        </div>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <button>SignUp</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
      </div>
    </div>
  )
}

export default Loginsignup;