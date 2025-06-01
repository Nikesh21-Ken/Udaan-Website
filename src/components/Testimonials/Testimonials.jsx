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
    review: "I’m truly grateful to Udaan Education Infosys for their incredible support throughout my student visa process. Thanks to their expert guidance, I’m now studying at Coventry University in the UK. Highly recommended for anyone planning to study abroad"
  },
  {
    name: "Rahul Rauniyar ",
    photo: '/student/Rahul-Rauniyar.jpg',
    college: `/college/sunderland.png`,
    review: "Waha harule mero UK ma padhne sapana lai reality ma badlidinu vayo. Entire process ma ekdam supportive ra professional hununthyo"
  },
  {
    name: "Pravin Tamang ",
    photo: '/student/Pravin-Tamang.jpg',
    college: `/college/arkansas.png`,
    review: "Udaan Education Infosys played a key role in helping me get admitted to Arkansas State University and successfully obtain my U.S. student visa. Their team was knowledgeable, supportive, and always ready to assist. I’m now in the USA, and I highly recommend Udaan to anyone planning to study abroad."
  },
  {
    name: "Lachhuman Buddhathoki",
    photo: '/student/Lachhuman-Budhathoki.jpg',
    college: `/college/arkansas.png`,
    review: "I am extremely thankful to Udaan Education Infosys for guiding me through the entire admission and visa process for Arkansas State University. Their expert team provided timely advice, helped me prepare all the documents, and supported me at every step to ensure a smooth and successful application. Thanks to them, I am now pursuing my studies in the USA with confidence."
  },
  {
    name: "Laxmi Shakya",
    photo: '/student/Laxmi-Shakya.jpg',
    college: `/college/arkansas.png`,
    review: "Thank you so much, Udaan, for making my dream of studying in the USA come true! Definitely recommend to all future students!"
  }, 
  {
    name: "Khem Raj Paneru",
    photo: `/student/Khem-raj.JPG`,
    college: "/college/Canadore-college.png",
    review: "Currently I’m studying in Canadore College in Canada. This is all possible only with the help of this consultancy. Thank You!!"
  },
  {
    name: "Prapti Pokharel",
    photo: '/student/Prapti-Pokhrel.jpg',
    college: `/college/arkansas.png`,
    review: "Ekdamai friendly, helpful and professional. Thank you for making my dream of studying in the USA."
  },
  {
    name: "Ashish Dhakal",
    photo: `/student/Ashish-Dhakal.jpg`,
    college: "/college/centennial.png",
    review: "I am currently pursuing my studies at Centennial College, Canada, and this was made possible with the help of Udaan Education Infosys. From the admission process to securing my visa, their team was incredibly professional, supportive, and efficient. I highly recommend Udaan to any student planning to study abroad."
  },
  {
    name: "Pasang Dolma Tamang",
    photo: '/student/Pasang-Dolma-Tamang.jpg',
    college: `/college/arkansas.png`,
    review: "University selection dekhi visa approval samma ekdamai support paye maile. Thank you for making my dream come true."
  },
  {
    name: "Ashbin Shrestha ",
    photo: '/student/Ashbin-Shrestha.jpg',
    college: `/college/georgian.png`,
    review: "I am currently studying at Georgian College in Canada, and I’m truly grateful to Udaan Education Infosys for their outstanding support."
  },
  
  {
    name: "Milan Lama ",
    photo: `/student/Niran-Lama.jpg`,
    college: "/college/georgian.png",
    review: "They guided me through each anad every process, made everything smooth and stress free."
  },
  {
    name: "Krishna Prasad Wagley",
    photo: `/student/Krishna-Prasad.jpg`,
    college: "/college/centennial.png",
    review: "My dream to studying abroad was only possible with the help of Udaan Education Infosys. Highly recommended."
  },
  {
    name: "Abhishek Tamang",
    photo: `/student/ABISHEK-TAMANG.jpg`,
    college: "/college/fleming-college.png",
    review: "I’m thankful for their guidance and support."
  },
  {
    name: "Bishal Bharati",
    photo: `/student/Bishal-barathi.jpg`,
    college: "/college/Niagara-college.png",
    review: "The entire process was handled smoothly and professionally, I highly recommend Udaan to all students planning to study in Canada."
  },
  
  {
    name: "Ankit Dahal",
    photo: `/student/ANKIT-DAHAL.jpg`,
    college: "/college/centennial.png",
    review: "Great support from start to finish."
  },
  {
    name: "Anuja Tamang",
    photo: `/student/Anuja-tamang.jpg`,
    college: "/college/georgian.png",
    review: "Studying at Georgian College wouldn’t have been possible without Udaan’s expert guidance. Highly recommended!"
  },
  {
    name: "Ashmita Regmi",
    photo: `/student/ASHMITA-REGMI.jpg`,
    college: "/college/algoma.png",
    review: "I’m grateful for helping me secure admission and visa to Algoma University. Their support made the entire process easy and hassle-free."
  },
  {
    name: "Ayush Karki",
    photo: `/student/Ayush-Karki.jpg`,
    college: "/college/Niagara-college.png",
    review: "Thankyou for your support and guidance."
  },
  {
    name: "Bhishma Bam",
    photo: `/student/Bhishma-bam.jpg`,
    college: "/college/fleming-college.png",
    review: "THANKYOU for supporting me to get aadmission in fleming college."
  },
  {
    name: "Bikram Subedi",
    photo: `/student/Bikram-subedi.jpg`,
    college: "/college/Niagara-college.png",
    review: "Dhanyabad hajur haru ko full support and guidance ko lagi."
  },
  {
    name: "Christ Tamang",
    photo: `/student/CHRIST-TAMANG.jpg`,
    college: "/college/centennial.png",
    review: "Ekdam supportive ani professional consultancy."
  },
  {
    name: "Dolma Sherpa",
    photo: `/student/DOLMA-SHERPA.jpg`,
    college: "/college/st-clair.png",
    review: "Expert team."
  },
  {
    name: "Dorje Tamang",
    photo: `/student/DORJE-TAMANG.jpg`,
    college: "/college/fleming-college.png",
    review: "Thankyou for getting me admission into fleming college."
  },
  {
    name: "Hera Kumari Ghising",
    photo: `/student/HERA-KUMARI-GHISING.jpg`,
    college: "/college/fleming-college.png",
    review: "Thank you for all the support and Guidance, I am glad I Choose Udaan Education to for my aborad study partner."
  },
  {
    name: "Jenish Siral BK",
    photo: `/student/JENISH-SIRAL-BK.jpg`,
    college: "/college/fleming-college.png",
    review: "Entire process ekdam smoothly ani professionally handle gardinu vayo, thank you."
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
    review: "Thank you for your guidance."
  },
  {
    name: "Karuna Bhandari",
    photo: `/student/KARUNA-BHANDARI.jpg`,
    college: "/college/georgian.png",
    review: "Supportive and professional throughout the process."
  },
  {
    name: "laxman GC",
    photo: `/student/laxman-GC.jpg`,
    college: "/college/Niagara-college.png",
    review: "Really thankful for all the support."
  },
  {
    name: "Neema Sherpa",
    photo: `/student/neema-sherpa.jpg`,
    college: "/college/fanshawe.png",
    review: "I am currently in Canada and have received admission to Fanshawe College, Toronto with the support of Udaan Education Infosys."
  },
  {
    name: "Niroj Subedi",
    photo: `/student/NIROJ-SUBEDI.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys supported me every step of the way from IELTS to admission and visa with expert guidance and care."
  },
  {
    name: "Niyukti Luitel",
    photo: `/student/NIYUKTI LUITEL.jpg`,
    college: "/college/st-clair.png",
    review: "Thanks to Udaan Education Infosys, my entire process from IELTS to visa was seamless and stress-free."
  },
  {
    name: "Paras Rayamajhi",
    photo: `/student/PARAS-RAYAMAJH.jpg`,
    college: "/college/Niagara-college.png",
    review: "Highly recomended"
  },
  {
    name: "Pemba gyalu sherpa",
    photo: `/student/Pemba-gyalu-sherpa.jpg`,
    college: "/college/fleming-college.png",
    review: "Grateful to Udaan Education Infosys for helping me achieve my abroad study dream with full support in IELTS, admission, and visa."
  },
  {
    name: "Prasant kunuwar",
    photo: `/student/Prasant-kunuwar.jpg`,
    college: "/college/centennial.png",
    review: "From test prep to visa approval, Udaan Education Infosys made my abroad study journey smooth and successful."
  },
  {
    name: "RANJAN CHAPAGAIN",
    photo: `/student/RANJAN-CHAPAGAIN.jpg`,
    college: "/college/georgian.png",
    review: "Udaan Education Infosys provided excellent guidance throughout my IELTS, admission, and visa process."
  },
  {
    name: "RISHAV RAUNIYAR SHAH",
    photo: `/student/RISHAV-RAUNIYAR-SHAH.jpg`,
    college: "/college/fanshawe.png",
    review: "With Udaan’s help, I cleared IELTS, got admitted to my college, and received my visa without any issues."
  },
  {
    name: "Roma khanal",
    photo: `/student/Roma-khanal.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys made the complex process of studying abroad simple and clear from day one."
  },
  {
    name: "SALINA KHADKA",
    photo: `/student/SALINA KHADKA.jpg`,
    college: "/college/georgian.png",
    review: "Thanks to Udaan’s support, I handled my IELTS, college admission, and visa filing with full confidence."
  },
  {
    name: "SIDDHARTHA KHADKA",
    photo: `/student/SIDDHARTHA KHADKA.jpg`,
    college: "/college/Seneca.png",
    review: "A big thank you to Udaan Education Infosys for making my dream of studying in Canada a reality, from IELTS to visa."
  },
  {
    name: "SULAV KUMAR GHIMIRE",
    photo: `/student/SULAV-KUMAR-GHIMIRE.jpg`,
    college: "/college/fleming-college.png",
    review: "Udaan Education Infosys is the reason my study abroad process was smooth from IELTS coaching to final visa approval."
  },
  {
    name: "SUMAN KOIRALA",
    photo: `/student/SUMAN-KOIRALA.jpg`,
    college: "/college/fleming-college.png",
    review: "Udaan Education Infosys gave me the right support from IELTS preparation to securing my visa for Canada."
  },
  {
    name: "Urusha puri",
    photo: `/student/Urusha-puri.jpg`,
    college: "/college/fanshawe.png",
    review: "From the first IELTS class to getting my visa approved, Udaan Education Infosys was with me at every step."
  },
  
]
export default Testimonials
                  