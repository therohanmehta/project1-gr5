import React from 'react'
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
function Header() {
  return (
    <div style={{display:'flex'}}>
      
      <Link to={'./'}><h1>About</h1></Link>
      <Link to={'./footer'}><h1>Footer</h1></Link>
    </div>
  )
}

export default Header
