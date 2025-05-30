import React, { useRef } from 'react'
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Ashbin_photo from '../../assets/Ashbin-Shrestha.jpg'
// import TestimoniallsApi from './TestimoniallsApi'

const Testimonials = () => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#223a80" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#223a80" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  

  return (
    <div className='container '>
      <div className='testimonial'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='card'>
              <div className='up-card'>
                <img src={d.photo} alt="" />
              </div>
              <div className='down-card'> <h1>
                {d.name}</h1>
                <img src={d.college} alt="" />
                <p>{d.review}</p></div>
            </div>

          ))}</Slider></div>

    </div>
  )
}
const data = [
  {
    name: "Rabina Lama Tamang",
    photo: '/student/Rabina-Lama-Tamang.jpg',
    college: `/college/coventry.png`,
    review: ""
  },
  {
    name: "Rahul Rauniyar ",
    photo: '/student/Rahul-Rauniyar.jpg',
    college: `/college/sunderland.png`,
    review: ""
  },
  {
    name: "Pravin Tamang ",
    photo: '/student/Pravin-Tamang.jpg',
    college: `/college/arkansas.png`,
    review: ""
  },
  {
    name: "Lachhuman Buddhathoki",
    photo: '/student/Lachhuman-Budhathoki.jpg',
    college: `/college/arkansas.png`,
    review: ""
  },
  {
    name: "Laxmi Shakya",
    photo: '/student/Laxmi-Shakya.jpg',
    college: `/college/arkansas.png`,
    review: ""
  }, 
  {
    name: "Khem Raj Paneru",
    photo: `/student/Khem-raj.JPG`,
    college: "/college/Canadore-college.png",
    review: ""
  },
  {
    name: "Prapti Pokharel",
    photo: '/student/Prapti-Pokhrel.jpg',
    college: `/college/arkansas.png`,
    review: ""
  },
  {
    name: "Ashish Dhakal",
    photo: `/student/Ashish-Dhakal.jpg`,
    college: "/college/centennial.png",
    review: ""
  },
  {
    name: "Pasang Dolma Tamang",
    photo: '/student/Pasang-Dolma-Tamang.jpg',
    college: `/college/arkansas.png`,
    review: ""
  },
  {
    name: "Ashbin Shrestha ",
    photo: '/student/Ashbin-Shrestha.jpg',
    college: `/college/georgian.png`,
    review: ""
  },
  
  {
    name: "Milan Lama ",
    photo: `/student/Niran-Lama.jpg`,
    college: "/college/georgian.png",
    review: ""
  },
  {
    name: "Krishna Prasad Wagley",
    photo: `/student/Krishna-Prasad.jpg`,
    college: "/college/centennial.png",
    review: ""
  },
  {
    name: "Abhishek Tamang",
    photo: `/student/ABISHEK-TAMANG.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Bishal Bharati",
    photo: `/student/Bishal-barathi.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  
  {
    name: "Ankit Dahal",
    photo: `/student/ANKIT-DAHAL.jpg`,
    college: "/college/centennial.png",
    review: ""
  },
  {
    name: "Anuja Tamang",
    photo: `/student/Anuja-tamang.jpg`,
    college: "/college/georgian.png",
    review: ""
  },
  {
    name: "Ashmita Regmi",
    photo: `/student/ASHMITA-REGMI.jpg`,
    college: "/college/algoma.png",
    review: ""
  },
  {
    name: "Ayush Karki",
    photo: `/student/Ayush-Karki.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  {
    name: "Bhishma Bam",
    photo: `/student/Bhishma-bam.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Bikram Subedi",
    photo: `/student/Bikram-subedi.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  {
    name: "Christ Tamang",
    photo: `/student/CHRIST-TAMANG.jpg`,
    college: "/college/centennial.png",
    review: ""
  },
  {
    name: "Dolma Sherpa",
    photo: `/student/DOLMA-SHERPA.jpg`,
    college: "/college/st-clair.png",
    review: ""
  },
  {
    name: "Dorje Tamang",
    photo: `/student/DORJE-TAMANG.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Hera Kumari Ghising",
    photo: `/student/HERA-KUMARI-GHISING.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Jenish Siral BK",
    photo: `/student/JENISH-SIRAL-BK.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Kalyan Thapa",
    photo: `/student/Kalyan-Thapa.jpg`,
    college: "/college/Canadore-college.png",
    review: ""
  },
  {
    name: "Kapil Bhandari Thapa",
    photo: `/student/KAPIL-BHANDARI.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Karuna Bhandari",
    photo: `/student/KARUNA-BHANDARI.jpg`,
    college: "/college/georgian.png",
    review: ""
  },
  {
    name: "laxman GC",
    photo: `/student/laxman-GC.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  {
    name: "Neema Sherpa",
    photo: `/student/neema-sherpa.jpg`,
    college: "/college/fanshawe.png",
    review: ""
  },
  {
    name: "Niroj Subedi",
    photo: `/student/NIROJ-SUBEDI.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  {
    name: "Niyukti Luitel",
    photo: `/student/NIYUKTI LUITEL.jpg`,
    college: "/college/st-clair.png",
    review: ""
  },
  {
    name: "Paras Rayamajhi",
    photo: `/student/PARAS-RAYAMAJH.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  {
    name: "Pemba gyalu sherpa",
    photo: `/student/Pemba-gyalu-sherpa.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Prasant kunuwar",
    photo: `/student/Prasant-kunuwar.jpg`,
    college: "/college/centennial.png",
    review: ""
  },
  {
    name: "RANJAN CHAPAGAIN",
    photo: `/student/RANJAN-CHAPAGAIN.jpg`,
    college: "/college/georgian.png",
    review: ""
  },
  {
    name: "RISHAV RAUNIYAR SHAH",
    photo: `/student/RISHAV-RAUNIYAR-SHAH.jpg`,
    college: "/college/fanshawe.png",
    review: ""
  },
  {
    name: "Roma khanal",
    photo: `/student/Roma-khanal.jpg`,
    college: "/college/Niagara-college.png",
    review: ""
  },
  {
    name: "SALINA KHADKA",
    photo: `/student/SALINA KHADKA.jpg`,
    college: "/college/georgian.png",
    review: ""
  },
  {
    name: "SIDDHARTHA KHADKA",
    photo: `/student/SIDDHARTHA KHADKA.jpg`,
    college: "/college/Seneca.png",
    review: ""
  },
  {
    name: "SULAV KUMAR GHIMIRE",
    photo: `/student/SULAV-KUMAR-GHIMIRE.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "SUMAN KOIRALA",
    photo: `/student/SUMAN-KOIRALA.jpg`,
    college: "/college/fleming-college.png",
    review: ""
  },
  {
    name: "Urusha puri",
    photo: `/student/Urusha-puri.jpg`,
    college: "/college/fanshawe.png",
    review: ""
  },
  
]
export default Testimonials
                  