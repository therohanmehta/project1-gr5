import React,{useState,useEffect} from 'react'
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import RegCss from './Registration.module.css'
import {userData} from "../../locaStorage/localStorage";

function Registration() {
const[local,setLocal]=useRecoilState([])
const[fname,setFname]=useState('')
const[lname,setLname]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')


    function submitToLocal(){
        const newData=[...local,{fname,lname,email,password}]
        setLocal(newData)
        
    }
    useEffect(()=>{
        // localStorage.getItem()
    },[])

  return (
    <div className={RegCss.div}>
       <input type="text" placeholder='Firstname' onChange={(e)=>{setFname(e.target.value)}}/>
       <input type="text" placeholder='Lastname'  onChange={(e)=>{setLname(e.target.value)}}/>
       <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
       <input type="text" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
      <Link to={'/'}> <button onClick={submitToLocal}>Registration</button></Link>
      
    </div>
  )
}

export default Registration
