import React,{useEffect, useState} from 'react'
import { useRecoilValue } from "recoil";
import LoginCss from "./Login.module.css";
import { Link } from "react-router-dom";
import {userData} from "../../locaStorage/localStorage";
import Home from '../Home/Home';

function Login() {
  const atomvalue=useRecoilValue(userData)
  const [enteredEmail,setEnteredEmail]=useState()  
  const [enteredPass,setEnteredPass]=useState('')
  const [filterData,setfilterData]=useState('')
  const [showHome,setShowHome]=useState(true)



  function CheckDataFromLocal() {
     const dataEnteredIsValid=atomvalue.filter((x)=> x.email===enteredEmail&& x.password===enteredPass)
     if(dataEnteredIsValid){
      setShowHome(!showHome)
     }
}


  return (

   
<div className={LoginCss.Div}>
      
<input type="text "  placeholder='Email' onChange={(e)=>{setEnteredEmail(e.target.value)}}/>
<input type="text "  placeholder='Password'  onChange={(e)=>{setEnteredPass(e.target.value)}}/>
{showHome?<button onClick={CheckDataFromLocal}> Login</button>:<Link to={'/home'}><button>Go to Home</button></Link>}
<Link to={'/registration'}><button>Dont have an account SIgnup</button></Link>
  
<button onClick={CheckDataFromLocal}>CVlick to conmsole</button>
</div>
    
  )
}

export default Login
