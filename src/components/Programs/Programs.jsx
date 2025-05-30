import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Diploma.jpeg'
import program_2 from '../../assets/Bachelors.jpeg'
import program_3 from '../../assets/Master.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { Link } from 'react-router-dom'
const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'> <Link to= '/programs'>
                <img src={program_1} alt="" />
                <div className='caption'>
                    <img src={program_icon_1} alt="" />
                    <p>Diploma</p>
                </div>
                </Link></div>
            <div className='program'> <Link to= '/programs'>
                <img src={program_2} alt="" />
                <div className='caption'>
                <img src={program_icon_2} alt="" />
                <p>Bachelors Degree</p>
            </div>
            </Link>
            </div>
            <div  className='program'> <Link to= '/programs'>
                <img src={program_3} alt="" />
                <div className='caption'>
                <img src={program_icon_3} alt="" />
                <p>Post-Graduate Certificate/Master Degree</p> 
            </div>
            </Link>
            </div >
        </div>
    )
}

export default Programs
