import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt="" className='about-img' />
                <a href="https://www.youtube.com/watch?v=tGlOaSxPR-E" target='_blank'><img src={play_icon} alt="" className='play-icon' /></a>
            </div>
            <div className='about-right'>
                <h3>About Udaan Education Infosys</h3>
                <h2>Nuturing Tommorow's Leaders Today</h2>
                <p>Udaan Education Infosys Pvt. Ltd. was formed in 2022, as an independent organization, for the promotion of international education with special emphasis on student counseling and consultancy services. Its core objective is to provide formal and authorized link between international education enterprises, national institutions and students planning to study abroad.
                    In order to achieve our aim we operate a full-time Education Counseling Service. Our primary goal is to ensure that students who are planning to study abroad are given professional advice and information on the various requirements and procedures in a systematic manner and processing their applications for admission. To support and coordinate education promotions through seminars and exhibitions, marketing and recruitment activities, communicating the needs and visions of our clients in a well-managed and quality assured manner for the realization of the full scope of marketing objectives.
                    Udaan Education, ensure that students are equipped to cope with change to acquire the correct skills and knowledge in order to continue their learning and observation skills throughout their lives and to develop positive attitudes that create individual and collective commitment to standards of perfection and excellence.
                    Students are strongly advised to consult education reference material available, and through interaction with acknowledged resource centers, and professionals, who have already studied or lived in abroad.</p>
            </div>
        </div>
    )
}

export default About
