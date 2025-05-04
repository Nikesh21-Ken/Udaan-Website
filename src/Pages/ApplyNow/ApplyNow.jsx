import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './ApplyNow.css'
import { Form } from 'react-router-dom'
import { useState } from 'react'


const ApplyNow = () => {
function onSubmit() {
  ""
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
    <div >
        <Navbar/>
        <div className='container'>
       <div className='apply-background container'>
          <h1>Udaan Online Application Form</h1>
          <Form onSubmit={onSubmit}>
            <div className='info-box'>
                <h1>Personal Details</h1>
          <div className='personal-information'>
              <div className='i-box'>
                <label  className = 'required'>First Name</label>
                <input type="text" name='First Name' placeholder='Enter your First Name' required />
                </div>
              <div className='i-box'>
                <label >Middle Name</label>
                <input type="text" name='Middle Name' placeholder='Enter Your Middle Name' /></div>
                <div className='i-box'>
                <label  className = 'required'>Last Name</label>
                <input type="text" name='Last Name' placeholder='Enter Your Last Name' required />
                </div>
                <div className='i-box'>
                <label  className = 'required'>Date of Birth</label>
                <input type="date" name='Date of Birth' placeholder='' required />
                </div>
                <div className='i-box'>
                <label className='required' >Mobile Number</label>
                <input type="phone-number" name='Mobile Number' placeholder='Enter Your Mobile Number' required />
                </div>
                <div className='i-box'>
                <label className = 'required' >Email Adress</label>
                <input type="Email" name='Last Name' placeholder='Enter Email Adress' required />
                </div>
                <div className='i-box'>
                <label  className = '' >Passport </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                </div>
                </div>
                </div>
                <div>
                <div className='info-box'>
                <h1>Address</h1>
          <div className='adress-information'>
              <div className='i-box'>
                <label  className = 'required'>District</label>
                <input type="text" name='First Name' placeholder='' required />
                </div>
              <div className='i-box'>
                <label  className = 'required'>Ward No.</label>
                <input type="text" name='ward' placeholder='' required />
                </div>
              <div className='i-box'>
                <label className = 'required' >Province</label>
                <input type="text" name='Province' placeholder='' required />
                </div>
              <div className='i-box'>
                <label  className = 'required'>V.D.C./R.Munipality/Municipality/S.M.C/M.C</label>
                <input type="text" name='V.D.C./R.Munipality/Municipality/S.M.C/M.C' placeholder='' required />
                </div>
              <div className='i-box'>
                <label >Town</label>
                <input type="text" name='town' placeholder=''/>
                </div>
                </div>
                </div>
                <div className='info-box'>
                <h1>Academics Details</h1>
          <div className='academic-information'>
              <div className='i-box'>
                <h2>High School/ 12 Class Certificate</h2>
                <label  className = 'required' >Transcript </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  className = 'required' >Provisional Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  className = 'required' >Character Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  >Others</label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                
                </div>
              <div className='i-box'>
                <h2>Secondary School/SEE/Class 10 </h2>
                <label  className = 'required' >Mark Sheet </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  className = '' >Provisional Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder=''  />
                <label  className = '' >Character Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                <label  >Others</label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                </div>
            
              <div className='i-box'>
                <h2> If applying for Master's/PG Certificate Level Program</h2>
                <h2> Bachelors</h2>
                <label  className = '' >Transcript </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder=''  />
                <label  className = '' >Provisional Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder=''  />
                <label  className = '' >Character Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                <label  className = '' >Degree Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                <label  >Others</label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                </div>
                

                </div>
                
                </div>
                <div className='info-box'>
                <h1>English Proficency Test</h1>
          <div className='english-information'>
              <div className='i-tick'>
                <div className='i-box'>
                <label  >IELTS/PTE Certificate</label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                </div>
                </div>
                </div>
                </div>
                 <button className='submit-btn btn dark-btn' type='submit'> Submit Form</button>
                </div>
            </Form>
            </div>
       </div>
        </div>
  )
}

export default ApplyNow