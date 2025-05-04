import React, { useEffect } from 'react';
import './SAT.css'
import Navbar from '../../../components/Navbar/Navbar'
import sat_1 from '../../../assets/sat-1.png'
import sat_2 from '../../../assets/sat-2.jpg'
import sat_3 from '../../../assets/sat-3.jpg'
import { Link } from 'react-router-dom'
import Fotter from '../../../components/Fotter/Fotter'
const SAT = () => {
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
      <div className="background-sat">
        <div className='background-sat-text'>
          <h1>SAT</h1>
        </div>
      </div>
      <div className="sat">
        <div className='info-sat'>
          <div className='info-sat-img'>
            <img src={sat_1} alt="" />
          </div>
          <div className='info-sat-text'>
            <h3>What is SAT?</h3>
            <p>The SAT is a standardized test widely used for college admissions in the United States. It was first introduced in 1926, and its name and scoring have changed several times, being originally called the Scholastic Aptitude Test, then the Scholastic Assessment Test, then the SAT Reasoning Test, and now simply the SAT.

              The SAT is owned and published by the College Board, a private, nonprofit organization in the United States. It is developed and administered on behalf of the College Board by the Educational Testing Service. The test is intended to assess a student’s readiness for college.

              The current SAT, introduced in 2005, takes 3 hours and 45 minutes to finish, and as of 2014 costs US$52.50 (up to US$94.50 outside of the United States), excluding late fees. Possible scores on the SAT range from 600 to 2400, combining test results from three 800-point sections: Mathematics, Critical Reading, and Writing. Taking the SAT or its competitor, the ACT, is required for freshman entry to many, but not all, universities in the United States.</p>
          </div>
        </div>
      </div>
      <div className="sat-light">
        <div className='info-sat'>
          <div className='info-sat-img'>
            <img src={sat_2} alt="" />
          </div>
          <div className='info-sat-text'>
            <h3>Benefits of a High SAT Score</h3>
            <p>The SAT is a standardized test widely used for college admissions in the United States. It was first introduced in 1926, and its name and scoring have changed several times, being originally called the Scholastic Aptitude Test, then the Scholastic Assessment Test, then the SAT Reasoning Test, and now simply the SAT.

            </p>
          </div>
        </div>
      </div>
      <div className="sat">
        <div className='info-sat'>
          <div className='info-sat-img'>
            <img src={sat_3} alt="" />
          </div>
          <div className='info-sat-text'>
            <h3>Why take a SAT test?</h3>
            <p>A high SAT score will increase the chances of admission in top Business Schools There are good chances of getting some kind of financial assistance with a high SAT score Visa Officers also give weightage to high SAT scores while considering Visa applications </p>

          </div>
        </div>
      </div>
      <div className='texture'>
        <Link to='/apply-now'> <button className='btn dark-btn'> Apply Now</button></Link>
      </div>
      <div className='container'>
        <Fotter />
      </div>
    </div>
  )
}

export default SAT