import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import study_in_uk from '../../assets/study-in-uk.jpg'
import uk_info_1 from '../../assets/uk-info-1.jpg'
import uk_info_2 from '../../assets/uk-qualification.jpg'
import uk_info_3 from '../../assets/uk-process.jpg'

import './UK.css'
import { Link } from 'react-router-dom'
import Fotter from '../../components/Fotter/Fotter'
export const UK = () => {
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
    <div >
      <Navbar />
      <div className='background-uk'>
        <div className='background-uk-text'>
          <h1>UNITED KINGDOM</h1>
          <h2>The UK is a vibrant tapestry of academic excellence, cultural diversity, and endless opportunities for international students</h2>
          <p>Make UK your new home</p></div>
      </div>
      <div className='container'>
        <div className='content'>
          <h1>Study in UK</h1>
          <div className='study-uk'>
            <div className='study-uk-img'><img src={study_in_uk} alt="" /></div>
            <p>The UK stands as an attractive study destination and work opportunity hub for international students seeking a world-class education and diverse career prospects. Renowned for its prestigious universities and colleges offering a wide array of programs, the UK ensures academic excellence through rigorous curricula and state-of-the-art research facilities. Beyond education, international students benefit from the UK's vibrant cultural scene, historical landmarks, and multicultural society, fostering personal growth and global awareness. Importantly, the UK offers post-study work opportunities through various visa schemes, allowing graduates to gain valuable professional experience and potentially transition to long-term employment or settlement. With a dynamic economy spanning sectors like finance, technology, healthcare, and creative industries, the UK provides abundant career pathways and networking opportunities for international students, making it a compelling choice for those looking to launch successful careers while enjoying a fulfilling study experience abroad.</p>
          </div></div></div>
      <div className='uk-info'>
        <img src={uk_info_1} alt="" />
        <div className='info-text'>
          <h3>Benefit of studying in the UK</h3>
          <p>
            <ul>
              <li>
                Degrees from UK universities are highly respected worldwide, enhancing the international student's credentials and opening doors to global career opportunities.
              </li>
              <li>The UK is a hub for research and innovation, providing international students with access to state-of-the-art facilities and opportunities to collaborate with leading researchers in their field.</li>
              <li>
                The UK offers post-study work opportunities through various visa schemes, allowing international students to gain valuable work experience and potentially secure long-term employment in the UK or elsewhere.
              </li>
              <li>
                Studying in an English-speaking country like the UK improves language proficiency, which is beneficial for both academic and professional purposes.
              </li>
              <li>
                International students can build a global network of contacts and connections, including fellow students, professors, and professionals, which can be valuable for future career advancements.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className='uk-info-light'>
        <div className='info-text'>
          <h3>Qualification to study in Uk</h3>
          <p>
            Studying in the UK as an international student requires meeting specific qualifications and requirements. For undergraduate studies, students typically need to have completed their secondary education with qualifications equivalent to UK A-levels or International Baccalaureate (IB) Diploma. Proficiency in English is crucial, demonstrated through standardized tests such as IELTS (with scores generally around 6.0-6.5 or higher), TOEFL, or Cambridge English exams. Obtaining a Tier 4 (General) student visa is essential for courses exceeding six months, necessitating an unconditional offer from a UK institution, proof of financial support to cover tuition fees and living expenses, and compliance with health and character requirements.
          </p> <p> For postgraduate studies, applicants generally require a relevant undergraduate degree from a recognized institution, often with specific GPA requirements depending on the program. Similar English language proficiency standards apply, with higher scores often required (around 6.5-7.0 or above). The Tier 4 visa process remains applicable, with additional criteria such as financial stability and a Confirmation of Acceptance for Studies (CAS) from the university. Each institution may have specific requirements, including work experience, portfolios, or interviews for certain programs, ensuring international students are well-prepared to thrive academically and personally in the UK's esteemed educational environment.
          </p>
        </div>
        <img src={uk_info_2} alt="" />
      </div>
      <div className='uk'>
      <div className='uk-info'>
        <img src={uk_info_3} alt="" />
        <div className='info-text'>
          <h3>Application process to study in Uk</h3>
          <p>
            Applying to study in the UK through us is a comprehensive and personalized journey designed to simplify the application process for you. We begin by assisting prospective students in selecting suitable universities and courses that align with their academic interests and career aspirations. Our experienced advisors then guide them through the compilation of essential documents, including academic transcripts, English proficiency test scores (such as IELTS or TOEFL), letters of recommendation, a well-crafted personal statement, and a copy of their passport. </p>

          <p>Once all documentation is prepared, we will support you in completing online application forms directly through university portals or using centralized platforms like UCAS for undergraduate programs. For postgraduate studies, applications are typically submitted directly to the chosen institutions. We ensure that applications are submitted well in advance of deadlines to maximize acceptance opportunities.</p>

          <p>Upon receiving offers of admission from universities, our team provides guidance on accepting offers and facilitates the process of obtaining the Confirmation of Acceptance for Studies (CAS) from the university. This CAS is a crucial requirement for the Tier 4 (General) student visa application, for which we offer comprehensive support. We assist students in completing the visa application forms, arranging biometric appointments at the nearest visa application center (VAC), and preparing financial documentation to demonstrate their ability to cover tuition fees and living expenses in the UK.</p>

          <p>Throughout the entire application process, we offer you personalized assistance, updates on application status, and prompt responses to any queries or concerns. We also provide valuable pre-departure support, including guidance on accommodation options, orientation programs, and insights into adapting to life in the UK. Our consultancy aims to ensure a seamless and successful application experience, empowering international students to embark on their academic journey in the UK with confidence and peace of mind.
          </p>
        </div>
        
      </div>
      <button className='btn dark-btn'> <Link to='/apply-now'>Apply Now</Link> </button>
      </div>
     <div className='container'>
      <Fotter/>
      </div>
      
    </div>
  )
}
