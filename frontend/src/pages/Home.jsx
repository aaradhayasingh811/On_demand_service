import React from 'react'
import Navbar from '../component/Navbar'
import Landing from '../component/Landing'
import Client from '../component/Client'
import Section from '../component/Section'
import Provider from '../component/Provider'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <>
    <Navbar />
    <Landing/>
    <Client/>
    <Section/>
    <Provider/>
    <Footer/>
    </>
  )
}

export default Home