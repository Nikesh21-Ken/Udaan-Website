import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './ContactUs.css'
import contact_us from '../../assets/contactus.png'
import Contact from '../../components/Contact/Contact'

const ContactUs = () => {
  useEffect(() => {
    // This is the effect that fires whenever the component mounts
    // Add page view tracking to Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-E36WTM8EJL', {
        page_path: window.location.pathname,
      });
    }
  }, [window.location.pathname]); // Runs whenever the path changes
  return (
    <div>
        <Navbar/>
        <div className='contactUs-hero'>
          <div className='contactUs-hero-text'>
            <h1>Contact us</h1>
            <h2>We would love to talk to you</h2>
          </div>
          <div className="contactUs-img"> <img src={contact_us} alt="" /></div>
        </div>
        <Contact/>
        </div>
  )
}

export default ContactUs