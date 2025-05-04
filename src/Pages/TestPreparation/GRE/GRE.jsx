import React, { useEffect } from 'react';
import './GRE.css'
import Navbar from '../../../components/Navbar/Navbar'
import gre_1 from '../../../assets/gre-1.png'
import gre_2 from '../../../assets/gre-2.jpeg'
import gre_3 from '../../../assets/gre-3.jpg'
import { Link } from 'react-router-dom'
import Fotter from '../../../components/Fotter/Fotter'
const GRE = () => {
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
    <div><Navbar />
    <div className="background-gre">
      <div className='background-gre-text'>
        <h1>GRE</h1>
      </div>
    </div>
    <div className="gre">
      <div className='info-gre'>
        <div className='info-gre-img'>
          <img src={gre_1} alt="" />
        </div>
        <div className='info-gre-text'>
          <h3>What is GRE?</h3>
          <p>The Graduate Record Examination, or GRE, is an important step in the graduate school or business school application process. The GRE is a multiple-choice, computer-based, standardized exam that is often required for admission to graduate programs and graduate business programs (MBA) globally.</p>
        </div>
      </div>
    </div>
    <div className="gre-light">
      <div className='info-gre'>
        <div className='info-gre-img'>
          <img src={gre_2} alt="" />
        </div>
        <div className='info-gre-text'>
          <h3>Who is it for? </h3>
          <p>TIf you’re considering going to graduate school, you’ve likely begun thinking about applications and admissions requirements. This invariably includes the GRE, or Graduate Record Examinations, an admissions test made up of Analytical Writing, Verbal Reasoning, and Quantitative Reasoning sections.

          </p>
        </div>
      </div>
    </div>
    <div className="gre">
      <div className='info-gre'>
        <div className='info-gre-img'>
          <img src={gre_3} alt="" />
        </div>
        <div className='info-gre-text'>
          <h3>Why take a GRE test?</h3>
          <p>The GRE is used by many graduate schools to determine whether a student is a qualified candidate for their program. If a student is planning on graduate school, business school, or even in some cases law school, the GRE is often an essential part of their application.</p>

        </div>
      </div>
    </div>
    <div className='texture'>
      <Link to='/apply-now'> <button className='btn dark-btn'> Apply Now</button></Link>
    </div>
    <div className='container'>
      <Fotter />
    </div></div>
  )
}

export default GRE