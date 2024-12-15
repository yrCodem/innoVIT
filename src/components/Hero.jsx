import React from 'react'
import { motion } from 'framer-motion'
// import Features from './Features'
import {
  FaComments,
  FaShare,
  FaCalendar,
  FaUsers,
  FaGraduationCap,
} from 'react-icons/fa'
import Homepage from './Homepage.jsx'
import Features from './Features.jsx'
import About from './About.jsx'
import Testimonials from './Testimonials.jsx'
import FAQ from './FAQ.jsx'
import Footer from './Footer.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import TermsOfService from './TermsOfService.jsx'
import Header from './Header.jsx'
function Hero() {
  return (
    <div className='min-h-screen bg-dark-bg text-white'>
      {/* <Header /> */}
      <Homepage />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
      {/* <TermsOfService/> */}
      {/* <PrivacyPolicy/> */}
    </div>
  )
}

export default Hero
