"use client"
import React from 'react'
import Stats from '../components/Stats'
import Team from '../components/Team'
import Header from '../components/Header'
import Footer from '../components/Footer'
function page() {
  return (
    <div>
    <Header/>
    <Stats/>
      <Team/>
      
      <Footer/>
    </div>
  )
}

export default page