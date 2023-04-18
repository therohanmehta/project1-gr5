import React from 'react'
import Header from '../Header/Header'
import HomeCss from './Home.module.css'

function Home() {
  return (
    <div className={HomeCss.mainDiv}>
      <Header/>
      <h1 className={HomeCss.intro}>“The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything.”</h1>
    </div>
  )
}

export default Home
