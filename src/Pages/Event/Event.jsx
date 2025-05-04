import React, { useEffect } from 'react';
import './Event.css'
import Navbar from '../../components/Navbar/Navbar'
import first_hero from '../../assets/first-hero.png'
import hand from '../../assets/hand.png'
import chair from '../../assets/Chair.png'
import Fotter from '../../components/Fotter/Fotter'
const Event = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ed13418-13da-4a1e-bff5-4d8620bd9baa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
        <div className='event-container'>
                 <div className="banner">
                  <img src={first_hero} alt="" />
                 </div>
                 <div className='banner-text'>
                    <h1>  Now book Your IELTS Test for free  </h1>
                    <h2> Rank First </h2>
                    <h1> in four mock test and book</h1>
                    <h1> Free IELTS Test date</h1>
                    <img src={hand} alt="" />
                 </div>
                

        </div>
        <div className='content'>
           <div className='content-text'>
                    <h1> 30 Seats </h1>
                  </div>
                  <img src={chair} alt="" />
                 <h1>1 winner</h1>
        </div>
        <div className='form' >
          <form onSubmit={onSubmit}>
          <label className='required'> Full Name </label>
          <input type='text' name='Full Name' placeholder='Enter your Full Name' required/>
          <label className='required'> Email Address </label>
          <input type='text' name='Email Address' placeholder='Enter your Email Address' required/>
          <label className='required'> Contact Number </label>
          <input type='text' name='Phone Number' placeholder='Enter your Phone Number' required/>
          <label className=''> Address </label>
          <input type='text' name='Address' placeholder='Enter your Address' />
          <button className='btn dark-btn' type='submit'> Submit</button>
          <span>{result} </span>
        
          </form>
        </div> 
        <Fotter/>
    </div>
  )
}

export default Event