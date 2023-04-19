import React,{useEffect, useState} from 'react'
import { useRecoilValue,useRecoilState } from "recoil";
import LoginCss from "./Login.module.css";
import { Link } from "react-router-dom";
import {showHome, userData} from "../../locaStorage/localStorage";
import Home from '../Home/Home';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Login() {
  
  const atomvalue=useRecoilValue(userData)
  const [enteredEmail,setEnteredEmail]=useState()  
  const [enteredPass,setEnteredPass]=useState('')
 const [homeVis,setHomeVis]=useRecoilState(showHome)
 const [test,setTest]=useState('')



  function CheckDataFromLocal() {
     const dataEnteredIsValid=atomvalue.find((x)=> x.email===enteredEmail&& x.password===enteredPass)
     if(dataEnteredIsValid){
      setHomeVis(!homeVis)
      setTest(dataEnteredIsValid)
      alert('login sucessful')
     }
    
      else{
      alert('Kindly check your email and password ')
      }
}


  return (

    homeVis?<Home/> :  
<div className={LoginCss.Div}>
<TextField sx={{ width: '25ch' }} id="outlined-basic" label="Enter your Email" variant="outlined" onChange={(e)=>{setEnteredEmail(e.target.value)}}/>
<TextField type='password' sx={{ width: '25ch' }} id="outlined-basic" label="Enter your password   " variant="outlined" onChange={(e)=>{setEnteredPass(e.target.value)}}/>
{/* <input type="email "  placeholder='Email' onChange={(e)=>{setEnteredEmail(e.target.value)}}/> */}
{/* <input type="text "  placeholder='Password'  onChange={(e)=>{setEnteredPass(e.target.value)}}/> */}
{homeVis?'':<Button variant='outlined' sx={{ width: '28ch' }} onClick={CheckDataFromLocal}>Click to validate</Button>}
{/* {homeVis?<Link to={'/home'}><button onClick={()=>{setHomeVis(false)}}>Go to Home</button></Link>:""} */}
<Button onClick={()=>{alert('Enter Details to Become a part of our gym family')}} variant='outlined' sx={{ width: '28ch' }}><Link to={'/registration'}>Dont have an account SIgnup</Link></Button>
  

</div>
    
  )
}

export default Login
