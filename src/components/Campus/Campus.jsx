import React from 'react'
import './Campus.css'
import study_canada from '../../assets/study-canada.jpg'
import study_usa from '../../assets/study-usa.jpg'
import study_uk from '../../assets/study-uk.jpg'
import study_australia from '../../assets/study-australia-2.png'
import study_newzealand from '../../assets/newzealand.jpg'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom'
const Campus = () => {
  return (
    <div className='campus'>
       <div className="gallery">
       <div className='gallery-com'>
       <Link to="/canada"><div className='gallery-img'><img src={study_canada} alt="" /></div>
        <p> STUDY IN CANADA</p>
        </Link> </div>
        <div className='gallery-com'><Link to="/usa"> <div className='gallery-img'><img src={study_usa} alt="" /></div>
        <p> STUDY IN USA</p></Link></div>
        <div className='gallery-com'> <Link to="/uk"><div className='gallery-img'><img src={study_uk} alt="" /></div>
        <p> STUDY IN UK</p></Link></div>
        <div className='gallery-com'><Link to="/australia"> <div className='gallery-img'><img src={study_australia} alt="" /></div>
        <p> STUDY IN Australia</p></Link></div>
        <div className='gallery-com'><Link to="/new-zealand"> <div   
        className='gallery-img'><img src={study_newzealand} alt="" /></div>
        <p> STUDY IN</p> <p> NEW ZEALAND</p></Link></div> 
      </div>

    </div>
  )
}

export default Campus
