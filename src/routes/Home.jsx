import React from 'react'
import Navbar from '../Component/Navbar'
import BannerSection from '../Component/BannerSection'
import Footer from '../Component/Footer'
import Card from '../Component/Card'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <BannerSection/>
       <Card/>       
       <Footer/>
    </div>
  )
}

export default Home
