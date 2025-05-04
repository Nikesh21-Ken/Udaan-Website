import React, { useEffect } from 'react';
import './PTE.css'
import Navbar from '../../../components/Navbar/Navbar'
import info_pte from '../../../assets/info-pte.png'
import pte_1 from '../../../assets/pte-1.jpg'
import laptop from '../../../assets/laptop-2.jpg'
import { Link } from 'react-router-dom'
import Fotter from '../../../components/Fotter/Fotter'

const PTE = () => {
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
      <Navbar />
      <div className="background-pte">
        <div className='background-pte-text'>
          <h1>PTE</h1>
        </div>
      </div>
      <div className="pte">
        <div className='info-pte'>
          <div className='info-pte-img'>
            <img src={info_pte} alt="" />
          </div>
          <div className='info-pte-text'>
            <h3>What is PTE?</h3>
            <p>PTE Academic is a computer-based English test that assesses your academic-level speaking, writing, reading and listening skills. You take the test in a small, friendly test center environment in just two hours.</p>
            <p>Pearson Test of English (PTE) provides secure English language testing for study applications worldwide, and for visa applications for work and migration in Australia, the UK, New Zealand, and Canada.</p>
          </div>
        </div>
      </div>
      <div className="pte-light">
        <div className='info-pte'>
          <div className='info-pte-img'>
            <img src={pte_1} alt="" />
          </div>
          <div className='info-pte-text'>
            <h3>Who is it for?</h3>
            <p>PTE Academic is a computer-based academic English language test aimed at non-native English speakers wanting to study abroad. It tests Reading, Writing, Listening, and Speaking. Questions often test 2 skills together, such as listening and reading or reading and speaking </p>
          </div>
        </div>
      </div>
      <div className="pte">
        <div className='info-pte'>
          <div className='info-pte-img'>
            <img src={laptop} alt="" />
          </div>
          <div className='info-pte-text'>
            <h3>Where we can take test?</h3>
            <p>PTE tests are conducted usually in 3 shift from Monday to Friday – Morning, Day and Evening hours. There are 2 test centres in Kathmandu. They are British Professional College & AlphaBeta Institute. Outside valley it is conducted in Chitwan Medical College (CMC). </p>
            <h3>What countries accept PTE?</h3>
            <p>The PTE Academic is recognized by thousands of universities worldwide, with the most popular being the UK, Australia, the US, and Canada.</p>
            <h3>How much does it cost to take PTE?</h3>
            <p>The standard PTE Academic exam fee is USD 200.</p>
          </div>
        </div>
      </div>
      <div className='texture'>
                   <Link to= '/apply-now'> <button className='btn dark-btn'> Apply Now</button></Link>
                </div>
                <div className='container'>
                        <Fotter/>
                </div>
    </div>
  )
}

export default PTE