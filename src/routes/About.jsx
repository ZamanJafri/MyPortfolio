import React from 'react'
import AboutBanner from '../Component/AboutBanner'

const About = () => {
    const heading = 'About';
    const para = `Lorem ipsum dolor sit 
    Lorem ipsum dolor sit Lorem ipsum dolor sit `
  return (
    <>
    
      <AboutBanner heading = {heading} para = {para} />
      
    </>
  )
}

export default About
