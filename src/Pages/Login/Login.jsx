import React from 'react'
import { useRecoilValue } from "recoil";
import LoginCss from "./Login.module.css";
import { Link } from "react-router-dom";
import {userData} from "../../locaStorage/localStorage";
function Login() {

  const atomvalue=useRecoilValue(userData)
  
  function CheckDataFromLocal() {
  
}

  return (
    <div className={LoginCss.Div}>
      <input type="text "  placeholder='Email'/>
      <input type="text "  placeholder='PAssword'/>
      <Link to={'/home'}><button onClick={CheckDataFromLocal}> Login</button></Link>
      <Link to={'/registration'}><button>Dont have an account SIgnup</button></Link>
        
      <button onClick={()=>{console.log(atomvalue)}}>CVlick to conmsole</button>
    </div>
  )
}

export default Login
