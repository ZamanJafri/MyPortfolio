import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import BannerProject from '../Component/BannerProject'
import Card from '../Component/Card'

const Projects = () => {
  const heading = 'Our Project'
  const para = `Lorem ipsum dolor sit amet 
 consectetur adipisicing elit`
  return (
    <>
      <BannerProject heading={heading} para={para} />
      <Card />
    </>
  )
}

export default Projects