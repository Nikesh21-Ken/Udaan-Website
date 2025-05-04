import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './USA.css'
import usa_2 from '../../assets/usa-2.jpg'
import usa_study_1 from '../../assets/usa-study-cost-1.jpg'
import usa_study_2 from '../../assets/usa-study-cost-2.jpg'
import usa_accommodation from '../../assets/usa-accommodation.jpg'
import usa_lifestyle from '../../assets/usa-lifestyle.jpeg'
import usa_admission from '../../assets/usa-admission.jpg'
import laptop_1 from '../../assets/laptop-1.jpg'
import laptop_2 from '../../assets/laptop-2.jpg'
import Fotter from '../../components/Fotter/Fotter'

export const USA = () => {
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
      <div className='background-usa'>
        <div className='background-usa-text'>
          <h1>United state of america</h1>
          <h2>Get soaked in the American lifestyle and experience more than just life </h2>
          <p>World Class Universities and Companies, USA has it all</p>
        </div>
      </div>
      <div className='usa'>
        <h1>USA</h1>
        <div className='why-usa'>
          <div className='why-usa-img'><img src={usa_2} alt="" /></div>
          <div className='why-usa-text'>
            <p>Welcome to the United States of America, a nation renowned for its diversity, innovation, and vast opportunities. Whether you're considering pursuing higher education, embarking on a new career path, or experiencing its rich cultural tapestry, the USA offers a multitude of possibilities for international students.</p>
            <h2>
              Why Study in the USA?
            </h2>
            <p> The USA is home to some of the world's top-ranked universities and colleges, known for their cutting-edge research facilities, distinguished faculty, and comprehensive academic programs. Institutions like Harvard, MIT, and Stanford consistently lead global rankings, offering a wide range of disciplines and opportunities for academic exploration.</p>
            <p>Experience a melting pot of cultures unlike anywhere else. From the vibrant streets of New York City to the picturesque landscapes of the Grand Canyon, each region of the USA offers its own unique charm and cultural heritage. Engage with people from all walks of life, fostering cross-cultural understanding and lifelong friendships.</p>
            <p>Gain valuable practical experience through internships and work-study programs that complement your academic pursuits. The USA's robust economy and entrepreneurial spirit provide numerous avenues for professional development across various industries, setting the stage for a successful career post-graduation.</p>
            <p>Explore the forefront of technological advancement and innovation. Silicon Valley in California, for instance, is a global epicenter for tech giants and startups alike, driving groundbreaking discoveries and shaping the future of industries worldwide.</p>
          </div>
        </div>

        <div className='usa'>
          <h1>study cost</h1>
          <div className='info-usa'>
            <div className='info-usa-img'>
              <img src={usa_study_1} alt="" />
            </div>
            <div className='info-usa-text'>
              <p>
                Studying in the USA as an international student involves careful financial planning due to several significant costs. Tuition fees vary widely depending on the institution and type of program, with private universities generally having higher tuition rates compared to public institutions. Additionally, living expenses such as accommodation, food, transportation, and personal expenses vary based on the city and lifestyle choices. Health insurance is mandatory for international students and adds to the financial burden. Moreover, academic materials like textbooks and supplies are essential costs to consider. It's crucial for prospective international students to budget effectively, explore available scholarships and financial aid opportunities, and plan for these expenses to ensure a smooth and successful academic experience in the USA.</p>
            </div>
          </div>
          <div className='info-usa'>

            <div className='info-usa-text'>
              <p>
                The average cost of tuition for international students in the USA varies significantly depending on the type and location of the university. Public universities generally offer lower tuition rates for in-state students compared to out-of-state and international students. For international students attending public universities, tuition can range from approximately $20,000 to $40,000 per year, depending on the specific institution and program of study. Private universities, on the other hand, typically have higher tuition fees across the board, with costs ranging from $30,000 to $50,000 or more annually. It's important for international students to research and compare tuition fees, as well as consider financial aid options and scholarships that may be available to help offset these expenses. Additionally, the cost of living, including accommodation, food, transportation, and other personal expenses, should be factored into the overall budget when planning to study in the USA</p>
            </div>
            <div className='info-usa-img'>
              <img src={usa_study_2} alt="" />
            </div>
          </div>

        </div>
        <div className='usa-dark'>
          <h1>Accommodation and Lifestyle</h1>
          <div className='info-usa'>
            <div className='info-usa-img'>
              <img src={usa_accommodation} alt="" />
            </div>
            <div className='info-usa-text'>
              <p>
                The average cost of accommodation for international students in the USA varies widely depending on the city, type of accommodation, and lifestyle preferences. On-campus housing options typically range from $8,000 to $12,000 per academic year, but this can vary significantly based on the university's location and amenities. Off-campus housing, such as renting apartments or shared houses, can range from $500 to $1,500 per month, again depending on the city and proximity to campus. Larger cities and metropolitan areas tend to have higher rental costs compared to smaller towns or rural areas. It's essential for international students to research housing options well in advance, consider factors like transportation costs and convenience to campus, and budget accordingly to manage living expenses effectively during their studies in the USA.</p>
            </div>
          </div>
          <div className='info-usa'>

            <div className='info-usa-text'>
              <p>
                The lifestyle of an international student in the USA is dynamic and multifaceted, shaped by a blend of academic pursuits, cultural exploration, and personal growth. Students typically find themselves immersed in a vibrant academic environment, attending classes, participating in discussions, and engaging with professors and peers from diverse backgrounds. Beyond academics, campus life offers a rich array of extracurricular activities, clubs, and organizations where students can pursue interests ranging from sports and arts to community service and entrepreneurship.</p>
            </div>
            <div className='info-usa-img'>
              <img src={usa_lifestyle} alt="" />
            </div>
          </div>
        </div>
        <div className='usa'>
          <h1> Admission Procedure</h1>
          <div className='info-usa'>
            <div className='info-usa-img'>
              <img src={usa_admission} alt="" />
            </div>
            <div className='info-usa-text'>
              <h3>Research Your Options</h3>
              <p>
                The first step to studying in the United States is researching your options to find a college or university that best fits your needs. Applicant shouldn’t try to match themselves to the school, but rather find the school that matches them and their priorities and long-term goals

                Remember that no official ranking system exists for colleges and universities in the United States. The best college or university is the one that is best for you and meets your requirements—academic, financial, and personal.</p>
            </div>
          </div>
          <div className='info-usa'>
            <div className='info-usa-text'>
              <h3>Finance Your Studies</h3>
              <p>
              Invest in yourself! The cost of living and studying varies across the United States. With the right amount of planning and research, pursuing a U.S. higher education can be made affordable with high returns on your investment.Start your financial planning as early as possible. Each year international students receive significant amounts of financial assistance for their studies. However, competition is high. Applications for financial aid go together with applications for admission.</p>
            </div>
            
            <div className='info-usa-img'>
              <img src={laptop_1} alt="" />
            </div>
            
          </div>
        </div>
        <div className='info-usa'>
            <div className='info-usa-img'>
              <img src={laptop_2} alt="" />
            </div>
            <div className='info-usa-text'>
              <h3>Complete your application</h3>
              <p>
              Applying for U.S. study is a task that takes time and concentration as each application is different and involves collecting recommendations, writing essays, and routing the results of required standard examinations. During this phase its very important to keep track of the application deadlin</p>
            </div>
          </div>
      </div>
      <div className="container">
        <Fotter/>
      </div>
    </div>
  )
}
