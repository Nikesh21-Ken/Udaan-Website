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
      <Navbar />
      <div className='about-us'>
        <div className='box1'>
          <div className='vid'><video src={about_us} loop controls ></video></div>
          <div className='text'><h1>Udaan Education Infosys</h1>
            <p>Udaan Education Infosys Pvt. Ltd.  was formed in 2022, as an independent organization, for the promotion of international education with special emphasis on student counseling and consultancy services. Its core objective is to provide formal and authorized link between international education enterprises, national institutions and students planning to study abroad.
              In order to achieve our aim we operate a full-time Education Counseling Service. Our primary goal is to ensure that students who are planning to study abroad are given professional advice and information on the various requirements and procedures in a systematic manner and processing their applications for admission. To support and coordinate education promotions through seminars and exhibitions, marketing and recruitment activities, communicating the needs and visions of our clients in a well-managed and quality assured manner for the realization of the full scope of marketing objectives.
            </p>
            <p>Udaan Education, ensure that students are equipped to cope with change to acquire the correct skills and knowledge in order to continue  their learning and observation skills throughout their lives and to develop positive attitudes that create individual and collective commitment to standards of perfection and excellence.</p>
            <p>Students are strongly advised to consult education reference material available, and through interaction with acknowledged resource centers, and professionals, who have already studied or lived in abroad.</p></div>
        </div>
      </div>
      <Title title="our Services" />

      <div className='our-service'>
        <div className='service'>
          <div className='service-item'><img src={study_abroad} alt="" />
            <h2>STUDY ABROAD</h2>
            <p>At Udaan Education, we guide you through every step of your study abroad journey. Once you’ve chosen your preferred course or field of study, the next big decision is selecting the right destination. With world-class institutions across Canada, the UK, the USA, Australia, and various parts of Europe, students are presented with a wealth of exciting opportunities—but also important choices. Our experienced consultants help you compare and evaluate these options based on academic reputation, course availability, lifestyle, cost of living, post-study work opportunities, and future career prospects. We ensure you choose a destination and institution that not only matches your goals but also sets you on the path to long-term success.</p>
          </div></div>
        <div className='service'>
          <div className='service-item'><img src={counselling} alt="" />
            <h2>CAREER COUNSELLING</h2>
            <p>Whether you’ve just completed high school, a Bachelor’s degree, or a Master’s program, choosing the right career path can be a daunting decision with countless possibilities. At Ecstasy, our dedicated career counselling services are designed to help you navigate these choices with clarity and confidence. Our expert counselors take the time to understand your interests, strengths, and long-term goals, offering personalized guidance on academic and professional pathways. Whether you’re uncertain about which course to pursue or where your qualifications can take you, we’re here to support you in making informed decisions that align with your aspirations. Feel free to ask questions—your future deserves thoughtful planning.</p>
          </div>
        </div>
        <div className='service'>
          <div className='service-item'><img src={admission} alt="" />
            <h2>INFORMATION ON ADMISSION REQUIREMENT</h2>
            <p>Admission requirements for international students vary from country to country and institution to institution. At Ecstasy, we provide detailed and up-to-date information tailored to your chosen destination and academic goals. Our consultants guide you through the essential admission criteria, which may include minimum academic qualifications, specific prerequisite courses, standardized test scores, language proficiency (such as IELTS or TOEFL), and in some cases, a portfolio or relevant work experience. With our expert assistance, you’ll have a clear understanding of what is required and how to best prepare a strong application that meets the expectations of your desired institution.</p>
          </div></div>
        <div className='service'>
          <div className='service-item'><img src={visa} alt="" />
            <h2>Visa-Documentition guidance</h2>
            <p>Securing a student visa involves meticulous documentation and thorough verification processes, which can often feel overwhelming. At Udaan, our experienced visa counselors are here to simplify this journey for you. We provide expert, step-by-step guidance throughout the entire visa application process—ensuring that every form is accurately completed, every required document is properly prepared, and every deadline is met. Whether you're applying for the first time or need help understanding visa procedures, we are committed to making the process smooth and stress-free, increasing your chances of a successful application.</p>
          </div></div>
        <div className='service'>
          <div className='service-item'><img src={pre_depature} alt="" />
            <h2>INTERVIEW PREPARATION AND PRE- DEPARTURE BRIEFING</h2>
            <p>At Udaan Education, we ensure that students are fully prepared for their journey abroad through comprehensive interview preparation and pre-departure briefings. Our mock interview sessions equip students with the confidence and communication skills needed to succeed in visa interviews. Additionally, our pre-departure briefings offer crucial insights into what to expect upon arrival in a new country. These sessions cover practical topics such as living arrangements, cultural adaptation, academic life, and managing homesickness. Students also get the chance to connect with alumni, current students, and peers who are heading to the same destination, helping them build a supportive network even before they leave.</p>
          </div></div>
        <div className='service'>
          <div className='service-item'><img src={accommodation} alt="" />
            <h2>ACCOMMODATION AND TRAVEL ARRANGEMENT</h2>
            <p>Once a student’s visa is successfully approved, Udaan Education extends its support beyond paperwork by assisting with accommodation and travel arrangements upon request. We understand that arriving in a foreign country can be both exciting and overwhelming, especially when adjusting to a completely new environment. To ease this transition, we help students find safe, comfortable, and affordable housing options close to their institutions. In addition, we provide guidance on airport pickups, local transportation, and settling into the new city, ensuring our students feel secure and supported from the moment they land.

            </p>
          </div></div>





      </div>
      <Fotter />
    </div>
  )
}

export default AboutUs