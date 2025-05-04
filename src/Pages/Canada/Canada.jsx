import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Canada.css'
import toronto from '../../assets/toronto-sunrise.jpg'
import why_canada from '../../assets/why-canada.jpg'
import Fotter from '../../components/Fotter/Fotter'
import { Link } from 'react-router-dom'

const Canada = () => {
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
      <div className='background'>
        <div className='background-text'><h1>canada</h1>
          <h2>Rich Culture, Quality Education, Vast Opportunities</h2>
          <p>Canda has much more to offer</p></div>
      </div>
      <div className='container'>
        <div className='canada-description'>
          <h1>CANADA</h1>
          <div className='description'>
            <div className='description-img'><img src={toronto} alt="" /></div>
            <p>Education in Canada is one of the highest quality and most prestigious in the world. While studying students are given unique opportunities to gain practical experience in Canadian companies, which significantly enhances their further employment in any country. Upon successful completion of the program, a talented graduate has every chance to immigrate to Canada without major obstacles from the government.</p>
          </div>
        </div>
        <div className='canada-description'>
          <h1>Why canada </h1>
          <div className='description'>
            <div className='description-img'> <img src={why_canada} alt="" /></div>
            <p>
              Studying in Canada as an international student offers a multifaceted experience that encompasses academic excellence, cultural diversity, and abundant opportunities for personal and professional growth. Renowned for its high-quality education system, Canadian universities consistently rank among the best globally, ensuring that students receive top-notch instruction and earn degrees recognized worldwide. Beyond academics, Canada's multicultural environment fosters understanding and appreciation of diverse cultures, enriching students' experiences both inside and outside the classroom. Moreover, Canada's reputation as a safe and welcoming country provides international students with a supportive environment to pursue their studies without compromising their sense of security. With various work opportunities available during and after studies, including internships, co-op programs, and pathways to work permits and permanent residency, Canada offers a promising future for international graduates. Additionally, the country's breathtaking natural landscapes, excellent quality of life, and access to cutting-edge research facilities further enhance the appeal of studying in Canada. In essence, choosing Canada as a study destination promises a holistic educational journey characterized by academic excellence, cultural immersion, and abundant opportunities for personal and professional development.
            </p>
          </div>
          <button className='btn dark-btn'> <Link to='/apply-now'>Apply Now</Link> </button>
        </div>

        <div className='options'>
          <h1> FOLLOWING MIGHT BE THE REASONS CANADA MIGHT BE THE BEST OPTION FOR YOU</h1>
          <div className='option'>
            <h2>High-Quality Education</h2>
            <p>
              Canada offers international students a high-quality education system characterized by its academic excellence, diverse range of institutions, and supportive learning environments. Canadian universities and colleges are renowned globally for their rigorous academic standards and innovative teaching methods that foster critical thinking and practical application of knowledge. Institutions in Canada prioritize research and provide students with access to state-of-the-art facilities and opportunities to engage in groundbreaking research across various disciplines. Moreover, the country's commitment to internationalization ensures a multicultural environment where students from diverse backgrounds can thrive and collaborate. Canada's education system also emphasizes employability, offering co-op programs, internships, and career services that equip students with the skills and experience necessary for successful careers globally. With its inclusive communities, strong support services, and global recognition of degrees, Canada stands as a premier destination for international students seeking a comprehensive and enriching educational experience abroad.</p>
            <h2>Diverse and Inclusive Society</h2>
            <p>
              ChatGPT
              Canada prides itself on being a diverse and inclusive society, making it an ideal destination for international students seeking a welcoming and supportive environment. One of Canada's defining features is its multiculturalism, where people from various cultural, ethnic, and religious backgrounds coexist harmoniously. This diversity is reflected in Canadian cities and campuses, enriching the cultural fabric and offering international students the opportunity to engage with different perspectives and traditions. Canadian society values inclusivity, promoting equal rights and opportunities for all individuals regardless of their background or identity. Institutions across Canada actively promote diversity and inclusion through policies, programs, and support services that cater to the needs of international students, ensuring they feel accepted and respected. Moreover, Canada's commitment to multiculturalism fosters a sense of community and belonging, contributing to a positive overall experience for international students as they study, live, and engage in Canadian society.</p>
            <h2>Affordable Education</h2>
            <p>Canada offers international students affordable education options compared to many other countries, making it an attractive choice for those seeking quality education without exorbitant costs. Tuition fees at Canadian universities and colleges are generally lower than those in the United States, Australia, and the United Kingdom, especially for international students. Additionally, the Canadian dollar often provides favorable exchange rates compared to other major currencies, further reducing the financial burden for international students. Beyond tuition, the cost of living in Canada can also be more affordable compared to other study destinations, depending on the city and province. Many Canadian universities offer scholarships, grants, and bursaries specifically for international students, helping to offset costs and make education more accessible. Furthermore, international students in Canada are eligible to work part-time during their studies (up to 20 hours per week), allowing them to gain valuable work experience and supplement their income. Overall, Canada's commitment to affordable education ensures that international students can pursue their academic goals without compromising on quality or financial stability.</p>
            <h2>Work Opportunities</h2>
            <p>Canada provides excellent work opportunities for international students, allowing them to gain valuable work experience while studying and after graduation. During their studies, international students enrolled full-time in a degree program at a designated learning institution (DLI) are eligible to work off-campus for up to 20 hours per week during regular academic sessions and full-time during scheduled breaks, such as summer or winter holidays. This enables students to earn income to support their living expenses, gain practical work experience in Canadian workplaces, and develop valuable skills that enhance their employability.

              After completing their studies, international students may be eligible to apply for a Post-Graduation Work Permit (PGWP). The PGWP allows graduates to work in Canada for a period equal to the length of their study program, up to a maximum of three years. This work permit is an excellent opportunity for international graduates to gain Canadian work experience and potentially qualify for permanent residency through pathways like the Canadian Experience Class (CEC) under the Express Entry system.

              Moreover, Canada's economy offers diverse employment opportunities across various sectors, ranging from technology and healthcare to finance and hospitality. Many provinces and territories actively seek skilled workers and professionals, making it possible for international students to find meaningful employment opportunities that align with their career goals.

              Overall, Canada's work opportunities for international students are designed to support their academic and career aspirations, providing them with practical experience, financial stability, and potential pathways to permanent residency in Canada. This makes Canada an attractive destination for international students looking to enhance their educational journey and future career prospects.</p>
            <h2>Pathway to Permanent Residency </h2>
            <p>Canada offers international students a clear pathway to permanent residency (PR) through various immigration programs designed to attract skilled individuals who have completed their studies in Canada. One of the key pathways is the Post-Graduation Work Permit (PGWP), which allows international graduates to gain valuable Canadian work experience after completing their studies. The PGWP is typically issued for a duration equivalent to the length of the study program, up to a maximum of three years. This work experience gained during the PGWP period can contribute significantly to a graduate's eligibility for permanent residency through the Canadian Experience Class (CEC) under the Express Entry system.

              The Express Entry system manages applications for permanent residency under three federal economic immigration programs: the Federal Skilled Worker Program, the Federal Skilled Trades Program, and the Canadian Experience Class. International students who have completed a minimum of one year of full-time study in Canada and have gained skilled work experience through the PGWP may qualify to apply under the CEC. This pathway prioritizes candidates with Canadian work experience, language proficiency, education, and other factors that contribute to their ability to successfully establish and integrate into Canada's workforce and society.

              Additionally, some provinces and territories in Canada offer Provincial Nominee Programs (PNPs) that include streams specifically tailored to international graduates. These PNPs allow provinces and territories to nominate individuals for permanent residency based on their skills, education, work experience, and ties to the region.

              Overall, Canada's pathway to permanent residency for international students is designed to retain talented individuals who have already integrated into Canadian society through their studies and work experience. It provides a viable route for international graduates to transition from temporary status to permanent residency, contributing to Canada's economic growth and diversity.</p>
            <h2>Beautiful and Safe Environment:</h2>
            <p>Canada offers international students a beautiful and safe environment to live and study, characterized by its stunning natural landscapes, clean cities, and low crime rates. From the breathtaking Rocky Mountains in the west to the picturesque coastline of the Atlantic provinces, Canada's diverse geography provides countless opportunities for outdoor activities and exploration. Many cities in Canada are known for their cleanliness, efficient public transportation, and well-maintained infrastructure, creating a comfortable and convenient living experience for international students.

              Moreover, Canada consistently ranks high on global safety indexes, with a reputation for being one of the safest countries in the world. Canadian cities are known for their welcoming and inclusive communities, where residents and international students alike feel secure and supported. The country's commitment to multiculturalism and respect for diversity contributes to a harmonious social environment, promoting tolerance and understanding among people from different cultural backgrounds.

              In addition to its natural beauty and safety, Canada offers a high quality of life with access to excellent healthcare, education, and social services. Whether enjoying outdoor activities like hiking, skiing, or visiting cultural landmarks and museums in urban centers, international students in Canada can experience a rich and fulfilling lifestyle. Overall, Canada's beautiful landscapes, safe communities, and high standard of living make it an ideal destination for international students seeking a secure and enriching educational experience abroad.</p>
            <h2>Research Opportunities</h2>
            <p>Canada offers extensive research opportunities for international students across a wide range of disciplines, making it a compelling destination for those interested in academic exploration and innovation. Canadian universities are known for their strong emphasis on research excellence, supported by state-of-the-art facilities, laboratories, and collaborative research initiatives. International students have the opportunity to engage in groundbreaking research projects under the guidance of renowned professors and researchers who are leaders in their fields.

              Many Canadian universities receive substantial funding for research from government agencies, private organizations, and industry partners, creating a dynamic research environment that fosters creativity and discovery. This funding supports research across various sectors, including health sciences, engineering, natural sciences, social sciences, and humanities. International students often contribute to these research endeavors through their unique perspectives and diverse backgrounds, enriching the research community with new ideas and insights.

              Moreover, Canadian universities actively promote research collaboration both domestically and internationally, facilitating partnerships with institutions and researchers around the world. This global connectivity allows international students in Canada to participate in international conferences, workshops, and research exchanges, further enhancing their academic and professional networks.

              In addition to academic research, Canada supports innovation and entrepreneurship through initiatives that encourage the commercialization of research findings and technologies. This entrepreneurial spirit provides opportunities for international students to explore careers in research and development, startup ventures, and industry collaborations.

              Overall, Canada's research opportunities for international students are comprehensive and diverse, offering a supportive environment for academic growth, innovation, and contribution to global knowledge advancement.</p>
            <h2>Cultural Experiences</h2>
            <p> Canada offers international students a rich tapestry of cultural experiences that reflect its diverse and inclusive society. From vibrant arts scenes to outdoor adventures, Canada provides ample opportunities for international students to explore and engage with its cultural heritage. Major cities like Toronto, Vancouver, Montreal, and Calgary host numerous cultural festivals, concerts, theater performances, and art exhibitions throughout the year, showcasing a blend of indigenous, European, Asian, African, and Caribbean influences.

              Indigenous culture plays a significant role in Canada's cultural landscape, with opportunities for international students to learn about First Nations, Métis, and Inuit traditions through cultural centers, museums, and community events. Canada's multiculturalism is celebrated through events such as the Toronto International Film Festival, Montreal Jazz Festival, and Vancouver International Writers Festival, offering international students insights into global perspectives in arts and entertainment.

              Beyond urban centers, Canada's natural beauty provides a backdrop for outdoor activities such as hiking in national parks, skiing in the Rocky Mountains, kayaking along coastal shores, and exploring historic sites like Quebec City's Old Town or the Banff National Park. International students can immerse themselves in Canada's natural wonders and cultural diversity, gaining a deeper understanding of the country's history, traditions, and values while forging lasting friendships and memories.

              Overall, Canada's cultural experiences offer international students a unique opportunity to broaden their perspectives, engage with diverse communities, and enrich their educational journey with memorable experiences that extend beyond the classroom.</p>
            <h2>Networking and Global Connections</h2>
            <p>Canada provides international students with valuable networking opportunities and global connections that enhance their academic and professional development. Canadian universities and colleges foster a supportive environment where students can build diverse networks of peers, professors, and professionals from around the world. Many institutions host networking events, workshops, and conferences that facilitate collaboration and knowledge exchange across various disciplines.

              Moreover, Canada's multicultural society encourages international students to interact with individuals from different cultural backgrounds, promoting cross-cultural understanding and broadening their global perspective. This cultural diversity not only enriches the learning experience but also prepares students to thrive in an interconnected and globalized world.

              Canadian universities actively promote international partnerships and collaborations with institutions worldwide, offering opportunities for research exchanges, joint academic programs, and study abroad experiences. These global connections enable international students to engage in international projects, conferences, and initiatives that contribute to their academic and career growth.

              Furthermore, Canada's strong ties to international organizations, businesses, and industries provide international students with access to internship opportunities, job placements, and career fairs that facilitate professional development and potential employment prospects. Whether through academic collaborations, cultural exchanges, or professional networking events, Canada offers international students a platform to establish meaningful connections and lay the foundation for a successful global career.

              In summary, Canada's commitment to fostering networking and global connections for international students enhances their educational experience by providing opportunities for collaboration, cultural exchange, and professional development in a supportive and inclusive environment.</p>

            <p>Overall, Canada's commitment to education, diversity, and quality of life makes it a compelling choice for international students seeking a well-rounded and enriching academic experience abroad.</p>

          </div>
        </div>
        <Fotter/>
      </div>
    </div>

  )
}

export default Canada