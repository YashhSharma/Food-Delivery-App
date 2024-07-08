import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {
    const [currentState,setCurrentState]=useState('Login')
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
      <div className='login-popup-title'>
        <h2>{currentState}</h2>
        <img src={assets.cross_icon} onClick={()=>setShowLogin(false)}></img>
      </div>
<div className='login-popup-inputs'>
{currentState==='Login'?<></>:<input type='text' placeholder='Your name' required></input>}

<input type='email' placeholder='Your mail' required></input>
<input type='password' placeholder='Password' required></input>
</div>
<button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
<div className='login-popup-condition'>
    <input type='checkbox' required></input>
    <p>
       By continuing,I agree to the terms of use & privacy policy. 
    </p>
</div>
{currentState==='Sign Up'?<p>Already have an Account? <span onClick={()=>setCurrentState('Login')}>Login here</span></p>
:
<p>Create a new Account? <span onClick={()=>setCurrentState('Sign Up')}>Click here</span></p>}


      </form>
    </div>
  )
}

export default LoginPopUp
