import React, { useEffect } from 'react';
import './TOEFL.css'
import Navbar from '../../../components/Navbar/Navbar'
import toefl_1 from '../../../assets/toefl-1.jpg'
import toefl_2 from '../../../assets/toefl-2.jpg'
import toefl_3 from '../../../assets/toefl-3.jpg'
import { Link } from 'react-router-dom'
import Fotter from '../../../components/Fotter/Fotter'

const TOEFL = () => {
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
      <div className="background-toefl">
        <div className='background-toefl-text'>
          <h1>TOEFL</h1>
        </div>
      </div>
      <div className="toefl">
        <div className='info-toefl'>
          <div className='info-toefl-img'>
            <img src={toefl_1} alt="" />
          </div>
          <div className='info-toefl-text'>
            <h3>What is TOEFL?</h3>
            <p>TOEFL is an acronym of the Test of English as a Foreign Language. It assesses your ability to both speak and understand English by analysing your English ability in terms of reading, speaking, listening and writing. These are all skills which will be needed to carry out your academic studies and the test is used by institutions to ensure students are able to proceed and succeed on their chosen course in a country where the curriculum is taught in English.</p>
          </div>
        </div>
      </div>
      <div className="toefl-light">
        <div className='info-toefl'>
          <div className='info-toefl-img'>
            <img src={toefl_2} alt="" />
          </div>
          <div className='info-toefl-text'>
            <h3>Who is it for?</h3>
            <p>The TOEFL test is designed to be taken by students who are planning to study at a university abroad and scholarship candidates, along with students and workers who are applying for visas, and English-language learners tracking their English progress. Keep an eye out on the requirements for university courses, as it will be stated there whether you are required to take the TOEFL and the minimum grade required to apply for the course.

            </p>
          </div>
        </div>
      </div>
      <div className="toefl">
        <div className='info-toefl'>
          <div className='info-toefl-img'>
            <img src={toefl_3} alt="" />
          </div>
          <div className='info-toefl-text'>
            <h3>Why take a TOEFL test?</h3>
            <p>Educational institutions and governmental agencies in over 130 countries accept TOEFL scores when considering applications for certain positions or courses.

              As an admission requirement, you may find that some courses require a minimum TOEFL score which will allow you to proceed onto the course alongside the regular course requirements. Minimum score requirements can range between 61 and 100, depending on the institution and course.

              The result you receive in your TOEFL test will only be valid for two years, after those two years they are no longer recorded, so if you’re looking to apply to study abroad after this time, you will have to sit the test again.

              It is important to ensure you take the test in time for your application if the result is part of the requirements; if you are only studying a course which lasts a year the same TOEFL results could be used to improve your opportunities for work in a foreign country also.

              If it is part of the requirements for your admission then it is important to research in more depth and be prepared for the different elements of the test. Here are the different elements of each test: </p>

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

export default TOEFL