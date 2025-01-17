import React from 'react'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter, Route ,Routes} from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Profilepage from './pages/Profilepage'
import BookingPage from './pages/BookingPage'
import AllBooking from './pages/AllBooking'
import ProfilePagePro from './pages/ProfilePagePro'
// import AllAppointment from './pages/AllAppointment'
import AllProviderAppointment from './pages/AllProviderAppointment'
import ProviderProfilePage from './pages/ProviderProfilePAge'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<RegisterPage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/dashboard/:email/:people" element={<Dashboard/>} />
      <Route exact path="/dashboard/profile/:email/:people" element={<Profilepage/>} />
      <Route exact path="/dashboard/profile/provider/:email/:people" element={<ProviderProfilePage/>} />
      <Route exact path="/dashboard/:email/:people/:work" element={<BookingPage/>} />
      <Route exact path="/dashboard/appointment/:email/:people" element={<AllBooking/>} />
      <Route exact path="/dashboard/booking/:email/:people" element={<AllProviderAppointment/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App