import React from 'react'
import { Link } from "react-router-dom";
import header from "./Header.module.css";
function Header() {

  return (
    <div className={header.nav}>
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaED3-rJgpu5AjeppalRNp9K3o9tGfWSPJw&usqp=CAU" alt=""  style={{borderRadius:"50%" , height:'50px' , marginRight:'10vw' , filter:'negative' }}/> 
    <h6><Link to={'/aboutus'}>About</Link></h6>
    <h6><Link to={'/training'}>training programe</Link></h6>
    <h6><Link to={'/trainer'}> traine</Link></h6>
    <h6><Link to={'/pricing'}>pricing</Link></h6>

    </div>
  )
}

export default Header
