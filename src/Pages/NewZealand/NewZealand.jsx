import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './NewZealand.css'
import newzealand from '../../assets/newzealand.jpg'
import newzealand_cost from '../../assets/newzealand-cost.jpg'
import newzealand_cost2 from '../../assets/newzealand-cost2.jpg'

import newzealand_acomodation from '../../assets/newzealand-acomodation.jpg'
import newzealand_lifestyle from '../../assets/newzealand-lifestyle.jpeg' 
import usa_admission from '../../assets/usa-admission.jpg'
import laptop_1 from '../../assets/laptop-1.jpg'
import laptop_2 from '../../assets/laptop-2.jpg'
import Fotter from '../../components/Fotter/Fotter'
const NewZealand = () => {
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
      <div className='background-newzealand'>
        <div className='background-newzealand-text'>
          <h1>New ZeaLand</h1>
          <p>Discover New Zealand: where breathtaking landscapes meet rich Maori culture in a land of adventure and tranquility.</p>

        </div>
      </div>
      <div className='newzealand'>
        <h1>New zealand</h1>
        <div className='why-newzealand'>
          <div className='why-newzealand-img'><img src={newzealand} alt="" /></div>
          <div className='why-newzealand-text'>
            <p>New Zealand, located in the southwestern Pacific Ocean, is renowned for its stunning natural landscapes, which range from rugged mountains and dense forests to pristine beaches and geothermal wonders. The country's indigenous Maori culture adds a rich layer of heritage, reflected in art, language, and traditions. With a population known for its friendliness and a commitment to sustainability, New Zealand offers a high quality of life and a safe environment, making it a popular destination for both travelers and those seeking to study or live abroad.</p>
            <h2>
              Why Study in the newzealand?
            </h2>
            <p> Studying in New Zealand offers international students access to top-notch education in a safe, multicultural environment. Renowned for its innovative teaching methods and research opportunities, New Zealand also boasts stunning natural landscapes and a rich Maori culture. The country's commitment to sustainability and practical learning equips students with globally recognized skills and experiences, making it an ideal choice for those seeking a quality education and a transformative international experience</p>
          </div>
        </div>

        <div className='newzealand'>
          <h1>study cost</h1>
          <div className='info-newzealand'>
            <div className='info-newzealand-img'>
              <img src={newzealand_cost} alt="" />
            </div>
            <div className='info-newzealand-text'>
              <p>
                The tuition fees for international students studying in New Zealand vary depending on the level of study, the institution, and the specific program chosen.

                At the undergraduate level, international students can expect to pay tuition fees ranging from NZD 22,000 to NZD 32,000 per year on average (approximately USD 15,000 to USD 22,000). However, tuition fees can be higher for programs such as medicine, engineering, and other specialized courses.</p>
              <p>
                For postgraduate programs, the tuition fees generally range from NZD 26,000 to NZD 37,000 per year (approximately USD 18,000 to USD 25,000). Again, certain programs, particularly those in business, law, and science fields, may have higher tuition fees compared to others.
              </p>
            </div>
          </div>
          <div className='info-newzealand'>

            <div className='info-newzealand-text'>
              <p>
                It's important to note that tuition fees can vary significantly between universities and even between different programs within the same institution. Therefore, prospective international students should research and compare tuition costs across different universities to find the best option that fits their academic and financial circumstances.</p>
              <p>
                New Zealand universities also offer scholarships and financial aid opportunities for international students, which can help offset some of the tuition costs. These scholarships may be merit-based, need-based, or specific to certain fields of study, so students are encouraged to explore these options early in their application process.

                
              </p>
              <p>
              Overall, while tuition fees for international students in New Zealand are competitive compared to other popular study destinations, it's essential for students to budget carefully and plan for these costs as part of their overall financial preparation for studying abroad.
              </p>
            </div>
            <div className='info-newzealand-img'>
              <img src={newzealand_cost2} alt="" />
            </div>
          </div>

        </div>
        <div className='newzealand-dark'>
          <h1>Accommodation and Lifestyle</h1>
          <div className='info-newzealand'>
            <div className='info-newzealand-img'>
              <img src={newzealand_acomodation} alt="" />
            </div>
            <div className='info-newzealand-text'>
              <p>
                Accommodation options for international students in New Zealand cater to various preferences and budgets. University-managed halls of residence offer a convenient and community-oriented living experience, with prices typically ranging from NZD 200 to NZD 400 per week (approximately USD 135 to USD 270), depending on location and amenities. These halls often provide furnished rooms and shared facilities like kitchens and common areas, making them popular among students seeking structured living arrangements. Alternatively, renting a room in a private flat or shared house is common, particularly in urban areas. Costs for private accommodation can vary widely based on location and type of housing, ranging roughly from NZD 150 to NZD 300 per week (approximately USD 100 to USD 200). It's advisable for students to consider factors like proximity to campus, utilities, and lease terms when choosing accommodation in New Zealand.</p>
            </div>
          </div>
          <div className='info-newzealand'>

            <div className='info-newzealand-text'>
              <p>
              The lifestyle of international students in New Zealand is characterized by a balance of academic rigor, cultural exploration, and outdoor adventure. Students often find themselves immersed in a welcoming and multicultural society, where they can engage with diverse communities and experiences. Beyond their studies, international students enjoy exploring New Zealand's breathtaking natural landscapes, from pristine beaches and lush forests to majestic mountains and geothermal wonders. Cultural activities, such as attending Maori cultural events or exploring local markets and cuisine, enrich their experience and foster connections with the country's rich heritage. The country's safety, modern amenities, and vibrant cities like Auckland, Wellington, and Christchurch offer a conducive environment for socializing, learning, and personal growth, making New Zealand a highly desirable destination for international education.
</p>
            </div>
            <div className='info-newzealand-img'>
              <img src={newzealand_lifestyle} alt="" />
            </div>
          </div>
        </div>
        <div className='newzealand'>
          <h1> Admission Procedure</h1>
          <div className='info-newzealand'>
            <div className='info-newzealand-img'>
              <img src={usa_admission} alt="" />
            </div>
            <div className='info-newzealand-text'>
              <h3>Research and Application</h3>
              <p>
              First, prospective students should research universities and programs that align with their academic and career goals. Each university website provides detailed information on entry requirements, program specifics, and application deadlines. International students need to ensure they meet the academic prerequisites, English language proficiency requirements (often demonstrated through tests like IELTS or TOEFL), and any specific program prerequisites (such as portfolios for arts programs or GMAT/GRE scores for business programs). Once requirements are met, applicants can submit their applications online, along with required documents such as transcripts, letters of recommendation, and a statement of purpose.</p>
            </div>
          </div>
          <div className='info-newzealand'>
            <div className='info-newzealand-text'>
              <h3>Offer and Acceptance</h3>
              <p>
              After reviewing applications, universities issue offers of admission to successful candidates. The offer letter outlines the conditions of acceptance, including any required tuition fees and deadlines for payment. International students may need to provide evidence of sufficient funds to cover their tuition fees and living expenses in New Zealand as part of their acceptance process. Upon receiving an offer, students can either accept it to secure their place or decline and explore other options.</p>
            </div>

            <div className='info-newzealand-img'>
              <img src={laptop_1} alt="" />
            </div>

          </div>
        </div>
        <div className='info-newzealand'>
          <div className='info-newzealand-img'>
            <img src={laptop_2} alt="" />
          </div>
          <div className='info-newzealand-text'>
            <h3>Student Visa and Preparation</h3>
            <p>
            Once the offer of admission is accepted, international students must apply for a student visa to study in New Zealand. This process involves submitting additional documents such as a valid passport, health and character certificates, proof of sufficient funds, and evidence of accommodation arrangements. After receiving their student visa, students can proceed with travel arrangements, including booking flights and arranging accommodation in New Zealand. Universities often provide support services to assist students with visa applications and settling into their new academic environment.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <Fotter />
      </div>
    </div>
  )
}

export default NewZealand