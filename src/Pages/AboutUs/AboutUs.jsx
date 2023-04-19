import React from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import abtCss from "./AboutUs.module.css";
function AboutUs() {
  return (
    <>
    <div className={abtCss.mainDiv}>
      <Header/>
      <div className={abtCss.vdo1div}>
     <iframe  src="https://www.youtube.com/embed/f6t9TQqdUzg" frameborder="0" height='280' width='500' allowfullscreen='true'></iframe>


        <div >

     <h1 className={abtCss.txt}>AboutUS</h1>
     <h3 className={abtCss.txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nobis cum necessitatibus voluptatum laborum sequi explicabo quibusdam id quia similique perspiciatis asperiores dolore, velit dicta recusandae repellendus, iste porro a non architecto. Illum sapiente commodi iure nihil nemo reprehenderit neque?</h3>
        </div>
      </div>

      <div className={abtCss.vdo2div}>
        <div>

        <h1 className={abtCss.txt}>Why Choose us</h1>
        <h3 className={abtCss.txt}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, rerum harum ex maiores incidunt dolorum modi iusto quas inventore eligendi commodi, deserunt ratione deleniti at nobis laborum totam cumque voluptatibus iste mollitia adipisci animi beatae ut illo. Consequuntur, assumenda quos.</h3>
        </div>
     <iframe  src="https://www.youtube.com/embed/f6t9TQqdUzg" frameborder="0" height='280' width='500' allowfullscreen='true'></iframe>

      </div>
      
      <Footer/>
    </div>
    </>
  )
}

export default AboutUs
