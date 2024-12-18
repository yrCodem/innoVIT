import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-secondary text-textColor py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <p className='mb-2'>Vellore Institute of Technology</p>
            <p className='mb-2'>Bhopal-Indore Highway</p>
            <p className='mb-2'>Kothrikalan, Sehore</p>
            <p className='mb-2'>Madhya Pradesh – 466114</p>
            {/* <p className="mb-2">Phone: </p> */}
            <p>Email: innovit.edu@gmail.com </p>
          </div>

          <div className='col-span-2'>
            <h3 className='text-xl font-bold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className=''>
                <FaFacebook size={24} />
              </a>
              <a href='#' className=''>
                <FaTwitter size={24} />
              </a>
              <a href='#' className=''>
                <FaLinkedin size={24} />
              </a>
              <a href='#' className=''>
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 text-center'>
          <p className='text-sm text-gray-400'>
            ©{new Date().getFullYear()} innoVIT Community. All rights reserved.
          </p>
          <div className='mt-2'>
            <a
              href='./PrivacyPolicy.jsx'
              className='text-sm text-textColor mx-2'
            >
              Privacy Policy
            </a>
            <a
              href='./TermsOfService.jsx'
              className='text-sm text-textColor mx-2'
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
