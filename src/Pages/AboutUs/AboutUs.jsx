import React from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import abtCss from "./AboutUs.module.css";
function AboutUs() {
  return (
    <div className={abtCss.mainDiv}>
      <Header/>
     
      <h1>“The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything.”</h1>
    <Footer/>
    </div>
  )
}

export default AboutUs
