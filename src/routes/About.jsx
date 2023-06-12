import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import AboutBanner from '../Component/AboutBanner'

const About = () => {
    const heading = 'About';
    const para = `Lorem ipsum dolor sit 
    Lorem ipsum dolor sit Lorem ipsum dolor sit `
  return (
    <>
      <Navbar/>
      <AboutBanner heading = {heading} para = {para} />
      <Footer/>
    </>
  )
}

export default About
