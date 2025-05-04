import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Campus from '../../components/Campus/Campus'
import './StudyAbroad'

const StudyAbroad = () => {
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
    <div className="canada">
      
    </div>
   <div className="usa">

   </div>
   <div className="uk">

   </div>
   <div className="australia">
    
   </div>
    </div>
  )
}

export default StudyAbroad