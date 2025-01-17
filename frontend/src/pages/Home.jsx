import React from 'react'
import Navbar from '../component/Navbar'
import Landing from '../component/Landing'
import Client from '../component/Client'
import Section from '../component/Section'
import Provider from '../component/Provider'
import Footer from '../component/Footer'
import Contact from '../component/Contact'
const Home = () => {
  return (
    <>
    <Navbar />
    <Landing/>
    <Client/>
    <Section/>
    <Provider/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home