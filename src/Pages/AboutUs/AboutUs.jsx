import React, { useEffect } from 'react';
import './AboutUs.css'
import Navbar from '../../components/Navbar/Navbar'
import about_us from '../../assets/about-us.mp4'
import visa from '../../assets/Visa-documentition.jpg'
import accommodation from '../../assets/accommodation.jpg'
import study_abroad from '../../assets/study-abroad.jpg'
import admission from '../../assets/admission-req.jpg'
import counselling from '../../assets/counselling.jpg'
import pre_depature from '../../assets/pre-depature.png'
import Title from '../../components/Title/Title'
import Fotter from '../../components/Fotter/Fotter'



const AboutUs = () => {
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
    <div className='container'>
        <Navbar/>
        <div className='about-us'>
          <div className='box1'>
          <div className='vid'><video src={about_us}  loop controls ></video></div>
          <div className='text'><h1>Udaan Education Infosys</h1>
          <p>Udaan Education Infosys Pvt. Ltd.  was formed in 2022, as an independent organization, for the promotion of international education with special emphasis on student counseling and consultancy services. Its core objective is to provide formal and authorized link between international education enterprises, national institutions and students planning to study abroad.
          In order to achieve our aim we operate a full-time Education Counseling Service. Our primary goal is to ensure that students who are planning to study abroad are given professional advice and information on the various requirements and procedures in a systematic manner and processing their applications for admission. To support and coordinate education promotions through seminars and exhibitions, marketing and recruitment activities, communicating the needs and visions of our clients in a well-managed and quality assured manner for the realization of the full scope of marketing objectives.
          </p>
          <p>Udaan Education, ensure that students are equipped to cope with change to acquire the correct skills and knowledge in order to continue  their learning and observation skills throughout their lives and to develop positive attitudes that create individual and collective commitment to standards of perfection and excellence.</p>
          <p>Students are strongly advised to consult education reference material available, and through interaction with acknowledged resource centers, and professionals, who have already studied or lived in abroad.</p></div>
        </div>
        </div>
        <Title title= "our Services"/>
        
        <div className='our-service'>
        <div className='service'>
            <div className='service-item'><img src= {study_abroad} alt="" />
            <h2>STUDY ABROAD</h2>
            <p>After determining the course or field of study you wish to pursue, the next step is to determine where you want to study. However, with dozens of learning institutions and education providers offering a wide range of.</p>
          </div></div>
          <div className='service'>
            <div className='service-item'><img src= {counselling} alt="" />
            <h2>CAREER COUNSELLING</h2>
            <p>Whether you've finished school, your Bachelor's degree or a Master's - in the end, you're always left with the sa Feel free to ask queries! mp question with an infinite number or answers. Deciding on one of them can be difficult. After.</p>
          </div>
          </div>
          <div className='service'>
            <div className='service-item'><img src= {admission} alt="" />
            <h2>INFORMATION ON ADMISSION REQUIREMENT</h2>
            <p>Every country has their own criterion for international students to be admitted in their institutions. Some of those requirements might include: a minimum level of completed prior studies and grades specific prerequisite courses proof of language proficiency in the language of instruction standardized test scores a portfolio or work experience.</p>
          </div></div>       
          <div className='service'>
            <div className='service-item'><img src= {visa} alt="" />
            <h2>Visa-Documentition guidance</h2>
            <p>Applying for a student visa needs to go through lots of verification and documentation, but Ecstasy's trained visa counselor are expert who will guide you through all the visa application. Are you looking for a step by step visa procedure? We are here for you. We provide complete guidance in every step for your most....</p>
          </div></div>
          <div className='service'>
            <div className='service-item'><img src= {pre_depature} alt="" />
            <h2>INTERVIEW PREPARATION AND PRE- DEPARTURE BRIEFING</h2>
            <p>Udaan Education pre-departure briefings help you prepare for departure and arrival in Abroad. At the briefing, you will receive valuable information about living in Abroad, life as a student at your institution, tips on adapting to the culture, and dealing with homesickness. You will also have the opportunity to network with other students, including alumni, current students, and future classmates.</p>
          </div></div>
           <div className='service'>
            <div className='service-item'><img src= {accommodation} alt="" />
            <h2>ACCOMMODATION AND TRAVEL ARRANGEMENT</h2>
            <p>After successful approval of the visa, we guide our students in accommodation travel arrangements in the request of the students. It includes the situation student have to face after arrival in a new environment of a foreign country plus accommodation arrangement</p>
          </div></div>
        
        
      
       
      
        </div>
        <Fotter/>
    </div>
  )
}

export default AboutUs