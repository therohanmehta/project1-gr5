import React from 'react'
import { Link } from "react-router-dom";
import RegCss from './Registration.module.css'
function Registration() {
  return (
    <div className={RegCss.div}>
       <input type="text" placeholder='Fname' />
       <input type="text" placeholder='Lname' />
       <input type="text" placeholder='Lname' />
      <Link to={'/'}> <button>Registration</button></Link>
    </div>
  )
}

export default Registration
