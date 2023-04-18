import React from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import abtCss from "./AboutUs.module.css";
function AboutUs() {
  return (
    <>
      <Header/>
    <div className={abtCss.mainDiv}>
      <div className={abtCss.vdo1div}>
     <iframe  src="https://www.youtube.com/embed/f6t9TQqdUzg" frameborder="0" height='280' width='500'></iframe>
        
     <h1>AboutUS</h1>
     <h3>This is baout us</h3>
      </div>

      <div className={abtCss.vdo2div}>
        <h1>Why Choose us</h1>
        <h3>This is the dummy texyt</h3>
     <iframe  src="https://www.youtube.com/embed/f6t9TQqdUzg" frameborder="0" height='280' width='500'></iframe>

      </div>
      
   
    </div>
    </>
  )
}

export default AboutUs
