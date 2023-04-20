import React from 'react'
import LoginCss from "./Login.module.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className={LoginCss.Div}>
      <input type="text "  placeholder='Email'/>
      <input type="text "  placeholder='PAssword'/>
      <Link to={'/aboutus'}><button> Login</button></Link>
      <Link to={'/registration'}><button>Dont have an account SIgnup</button></Link>
    </div>
  )
}

export default Login
