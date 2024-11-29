import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Vellore Institute of Technology</p>
            <p className="mb-2">Bhopal-Indore Highway</p>
            <p className="mb-2">Kothrikalan, Sehore</p>
            <p className="mb-2">Madhya Pradesh – 466114</p>
            <p className="mb-2">Phone: </p>
            <p>Email: </p>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-primary">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Programs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Events</a></li>
              <li className="mb-2"><a href="#" className="hover:text-primary">Support</a></li>
            </ul>
          </div> */}
          
          <div className='col-span-2'>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-primary"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-primary"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-primary"><FaInstagram size={24} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-white"
              />
              <button className="bg-primary hover:bg-blue-700 px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            ©{new Date().getFullYear()} innoVIT Community. All rights reserved.
          </p>
          <div className="mt-2">
            <a href="./PrivacyPolicy.jsx" className="text-sm text-gray-400 hover:text-primary mx-2">Privacy Policy</a>
            <a href="./TermsOfService.jsx" className="text-sm text-gray-400 hover:text-primary mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;