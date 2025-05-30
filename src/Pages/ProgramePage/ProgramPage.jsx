import React, { useState, useEffect } from 'react'
import './ProgramPage.css'
import Navbar from '../../components/Navbar/Navbar'
import './ProgramPage.css'
import program_1 from '../../assets/Diploma.jpeg'
import program_2 from '../../assets/Bachelors.jpeg'
import program_3 from '../../assets/Master.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import program_4 from '../../assets/program-4.png'
import { Link } from 'react-router-dom'
import Fotter from '../../components/Fotter/Fotter'
const ProgramPage = () => {
  const [colapse, setColapse] = useState(false)
  function showText() {
    setColapse(true)
  }
  function lessText() {
    setColapse(false)
  }
  const [colapse2, setColapse2] = useState(false)
  function showText2() {
    setColapse2(true)
  }
  function lessText2() {
    setColapse2(false)
  }
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
      <div>
      <Navbar/>
      
      </div>
      <div className='box'>
      <div className='courses'>
            <div className='courses-img'>
                <img src={program_1} alt="" /></div>
                <div className='courses-caption'>
                    <h2>Diploma</h2>
                    <p>
                    A diploma program is a type of educational program offered by various institutions, such as colleges, universities, vocational schools, or technical institutes. These programs typically provide specialized training and education in a specific field or industry.
                    <ul>
                 <h4> Key features of diploma programs include:</h4>
                    <li>
                    <h4>Focus: </h4>Diploma programs are often focused on practical skills and knowledge relevant to a particular career or industry. They are designed to prepare students for entry-level positions in their chosen field.
                    </li>
                    <li>
                    <h4>Duration:</h4> Diploma programs are usually shorter in duration compared to degree programs. They can range from a few months to a couple of years, depending on the institution and the specific program.
                    </li>
                    <li>
                    <h4>Curriculum:</h4> The curriculum of a diploma program is tailored to provide students with a comprehensive understanding of their chosen field. It may include both theoretical coursework and hands-on training.</li>
                    <li>
                    <h4>Career Opportunities:</h4> Diploma programs often lead directly to employment opportunities in various industries. Graduates may pursue careers in fields such as healthcare, business, technology, hospitality, automotive, and more.</li>
                  </ul>
                  Overall, diploma programs offer a practical and focused approach to education, equipping students with the skills and knowledge needed to succeed in their chosen career paths.
                    </p>
                    <div className='btn-apply'> <button className= 'btn dark-btn'> <Link to = '/apply-now'> Apply Now </Link> </button> </div>
                </div>
                </div> 
                <div className='courses'>
                  <div className='courses-img'>
                    <img src={program_2} alt="" /></div>
                    <div className='courses-caption'>
                      <h2>Bachelros</h2>
                      <p>A bachelor's degree is an exciting opportunity for international students to pursue higher education and expand their academic horizons. Offered by universities and colleges worldwide, a bachelor's degree program typically spans three to four years and provides in-depth study in a specific field of interest. For international students, pursuing a bachelor's degree often involves several key steps:
                        <ul>
                          <li>
                          <h4>Choosing a Country and University:</h4>International students first need to decide which country they want to study in and then research universities within that country that offer programs aligned with their interests and career goals.
                          </li>
                          <li>
                          <h4>Admissions Process:</h4>Once they've identified potential universities, international students typically need to go through the admissions process, which may include submitting academic transcripts, standardized test scores (such as the SAT or ACT), letters of recommendation, and sometimes English language proficiency test scores (such as TOEFL or IELTS).
                          </li>
                          <li>
                          <h4>Visa and Immigration::</h4>After being accepted into a university, international students usually need to obtain a student visa or relevant immigration documentation to legally study in their chosen country.  </li>
                          <span className={colapse2? "": "hide"}>
                            <li>
                            <h4>Coursework:</h4>The bachelor's degree program typically lasts for three to four years, depending on the country and the specific program of study. During this time, students take a variety of courses within their chosen major or field of study, as well as general education requirements.
                            </li>
                            <li>
                            <h4>Exams and Assessments:</h4>Throughout their studies, students may be required to complete exams, papers, projects, and other assessments to demonstrate their understanding of the material covered in their courses.
                            </li>
                            <li>
                            <h4>Internships and Extracurricular Activities:</h4>Many bachelor's degree programs encourage or require students to participate in internships, co-op programs, research projects, or other extracurricular activities to gain practical experience and build their resumes.
                            </li>
                            <li>
                            <h4>Thesis or Capstone Project:</h4>Some bachelor's degree programs require students to complete a thesis or capstone project in their final year of study, which allows them to delve deeper into a specific topic within their field of study.
                            </li>
                            <li>
                            <h4>Graduation:</h4>Upon successful completion of all coursework and requirements, students are awarded their bachelor's degree during a formal graduation ceremony.
                            </li>
                            </span>
                            For international students, pursuing a bachelor's degree can be an exciting and rewarding experience, offering opportunities for personal growth, academic achievement, and cultural exchange.
                            <button className={`hidetextBtn ${colapse2? "hide" : ""}`} onClick={showText2}> <p>...see more</p></button> <button className= {`hidetextBtn ${colapse2? "" : "hide"}`} onClick={lessText2}> <p>...see less</p></button>
                         
                        </ul>
                      </p>
                    <div className='btn-apply'> <button className= 'btn dark-btn'> <Link to = '/apply-now'> Apply Now </Link> </button> </div>
                  </div>
                </div>
          <div className='courses'>
                <div className='courses-img'>
                  <img src={program_3} alt="" />
                </div>
                <div className='courses-caption'>
                <h3>Post-Graduate Certificate/Master's Degree</h3>
                <p>A Post-Graduate Cretificate /Master's Degree for international students is an advanced academic program designed to provide in-depth knowledge and expertise in a specific field of study. Tailored to meet the needs of students from around the world, these programs offer an opportunity to further specialize in an area of interest, enhance career prospects, and immerse oneself in a diverse and multicultural learning environment</p>
                <p><ul>
                <h4>Key Features:</h4>
                  <li>
                  <h4>Specialized Learning:</h4> Post-Graduate/Master's programs offer specialized coursework and research opportunities, allowing students to delve deep into their chosen field and develop expertise in specific areas of interest.
                  </li>
                  <li>
                  <h4>Global Perspective:</h4> With a diverse student body and faculty from various backgrounds, international students gain a global perspective, enriching their academic experience and fostering cross-cultural understanding.
                  </li>
                  <li>
                  <h4>Research Opportunities:</h4>Many programs offer research opportunities, allowing students to contribute to cutting-edge research and innovation in their field under the guidance of renowned faculty members.
                  </li>
                  <li>
                  <h4>Professional Development:</h4>Master's/Post-Graduate programs often include practical training, internships, and industry collaborations, preparing students for successful careers in their chosen field upon graduation.
                  </li>
                  <li>
                  <h4>Professional Development:</h4>Master's/Post-Graduate programs often include practical training, internships, and industry collaborations, preparing students for successful careers in their chosen field upon graduation.
                  </li>
                  <li>
                  <h4>Networking Opportunities:</h4>Students have the opportunity to network with peers, alumni, and industry professionals, expanding their professional connections and opening doors to future career opportunities worldwide. 
                  </li>
                </ul>
                <span className= {colapse? "" : "hide"}><ul>
                <h4>Admissions Requirements:</h4>
                <li>
                <h4>Academic Credentials:</h4>Prospective students are typically required to hold a bachelor's degree or equivalent from a recognized institution, along with meeting specific GPA requirements.
                </li>
                <li>
                <h4>English Proficiency:</h4> Proficiency in the English language is often required, demonstrated through standardized tests such as the TOEFL or IELTS, unless the program is taught in another language.
                </li>
                <li>
                <h4>Letters of Recommendation:</h4> Applicants may be required to submit letters of recommendation from academic or professional references, highlighting their qualifications and readiness for graduate-level study.
                </li>
                <li>
                <h4>Statement of Purpose:</h4> A statement of purpose or personal statement outlining the applicant's academic and professional goals, as well as their motivation for pursuing graduate study, is often required.
                </li>
                </ul>
                Explore our Master's/Post-Graduate Degree programs for international students and take the first step towards advancing your education and career on a global scale.</span> <button className={`hidetextBtn ${colapse? "hide" : ""}`} onClick={showText}> <p>...see more</p></button> <button className= {`hidetextBtn ${colapse? "" : "hide"}`} onClick={lessText}> <p>...see less</p></button></p>
                <div className='btn-apply'> <button className= 'btn dark-btn'> <Link to = '/apply-now'> Apply Now </Link> </button> </div>
            </div>
            </div>
          </div>
          <Fotter/>
      </div>
  )
}

export default ProgramPage