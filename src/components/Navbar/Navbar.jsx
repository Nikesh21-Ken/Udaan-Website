import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/udaan-logo.png"
import { useState } from 'react'
import menu_icon from '../../assets/menu-icon.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import hamburger from '../../assets/Hamburger-icon.svg'


const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false)
  let menuRef = useRef()
  
  useEffect(()=>{
    let handler = (e)=>{
      if (!menuRef.current.contains(e.target)) {
        setMobileNav(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return ()=>{
      document.removeEventListener("mousedown", handler)
    }
  })
  return (
    <nav>
      <div className='nav'>
        <div className="nav-elements container">
          <div className='logo'>
            <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <div className={`links ${mobileNav? "unhide": ""}`} ref={menuRef}>
            <ul>
              <li> <NavLink to='/'> Home</NavLink></li>
              <li> <NavLink to='/programs'> Programs <RiArrowDropDownLine size={30} /> </NavLink></li>
              <li className='abroad-study'>Abroad Study <RiArrowDropDownLine size={30} />
                <div className="abroad-nav"  >                  <li> <NavLink to='/canada'>Canada</NavLink> </li>
                  <li><NavLink to='/usa'>USA</NavLink></li>
                  <li><NavLink to='/uk'>UK</NavLink></li>
                  <li><NavLink to='/australia'>Australia</NavLink></li>
                  <li><NavLink to='/new-zealand'>New Zealand</NavLink></li>
                </div></li>
              <li className='test-preparation' >Test Preparation <RiArrowDropDownLine size={30} />
                <div className="test-nav"  >
                  <li><NavLink to='/ielts'>  IELTS</NavLink></li>
                  <li><NavLink to='/pte'>  PTE</NavLink></li>
                  <li><NavLink to='/toefl'>  TOEFL</NavLink></li>
                  <li><NavLink to='/sat'>  SAT</NavLink></li>
                  <li><NavLink to='/gre'>  GRE</NavLink></li>
                </div></li>
              <li><NavLink to='/about-us'>About Us</NavLink></li>
              <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
              <li><NavLink to='/apply-now'>Apply Now</NavLink></li>
              {/* <li><NavLink to='/event'>Event</NavLink></li> */}
            </ul>
            <div className='hamburger'>
          <img src={hamburger} onClick={()=>{setMobileNav(!mobileNav) }}/> </div>
          </div></div>

        
      </div>
    </nav>
  )
}

export default Navbar
