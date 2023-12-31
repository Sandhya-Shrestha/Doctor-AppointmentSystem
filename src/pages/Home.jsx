import React from 'react'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Flickity from 'react-flickity-component'


import heroImg01 from '../Assets/images/hero-img01.jpg';
import icon01 from '../Assets/images/icon01.png';
import icon02 from '../Assets/images/icon02.png';
import icon03 from '../Assets/images/icon03.png';
import featureImg from '../Assets/images/feature-img.jpg';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar.png';
import faqImg from '../assets/images/faq-img.jpg';
import { Link } from 'react-router-dom';
import { BsArrowRight, } from 'react-icons/bs';
import aboutImg from '../Assets/images/about.jpg';
import aboutCardImg from '../Assets/images/about-card.jpg';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




const Home = () => {
  // const items = [
   
  //   <img src={icon01}  role="presentation" />,  
  //   <img src={icon02}  role="presentation" />,
  //   <img src={icon03}  role="presentation" />,
  // ];

return (<>

    
    {/* ______hero section _____*/}
{/* <AliceCarousel mouseTracking items={items} /> */}
    <section className="hero_section pt-[60px] 2xl:h-[600px]">
      <div className="container">
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
       

          {/*______hero content________*/}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
            md:leading-[70px]'>
                Your health is our priority.
              </h1>

              <p className='text__para mt-[20px]'>
                We are dedicated to providing you with the highest quality
                healthcare services and personalized care to
                ensure your well-being.
              </p>

              <button className='btn'>Request an Appointment</button>
            </div>

            {/*______hero counter______*/}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]' >
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:Leading-[54px] font-[700] text-headingColor'>10+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Years of Experince</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:Leading-[54px] font-[700] text-headingColor'>100%
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Doctor Experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:Leading-[54px] font-[700] text-headingColor'>100%
                </h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Patient Satisfaction</p>
              </div>
            </div>
          </div>
          {/*________Image Container_____*/}

          <div className='flex gap-[20px] justify-end'>
            <div>
              <img className='w-[450px] h-[450px] rounded-[20px]' src={heroImg01} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Providing the best medical services
          </h2>
          <p className='text__para text-center  mt-[20px]'>
            Your health and wellness are at the heart of everything we do,
            because providing the best medical services is our unwavering mission.
          </p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="" />
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Doctor
              </h2>
              <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center'>
                We are here to help you find the perfect doctor to guide
                with on your journey to optimal health.
              </p>

              <Link
                to='/doctors'
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a Location
                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center'>
                  With 'Find a Location', you can quickly
                  locate our medical centers and offices near you.
                </p>

                <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>

              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book Appointment
                </h2>
                <p className='text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center'>
                  Our user-friendly 'Book Appointment' feature allows you to schedule
                  your visit with just a few clicks.
                </p>

                <Link
                  to='/doctors'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>

              </div>
            </div>
           
        </div>

      </div>

    </section>

    {/*_______about section start_____*/}
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] x;:gap-0 flex-col lg:flex-row'>

          {/*______about img_____*/}
          <div className=' w-3/4 lg:w-1/2 w-[600px] order-2 mt-[1px] rounded-[70px]'>
            
            <img src={aboutImg} alt="" className='h-[400px] rounded-[20px]' />
           
            <div className='bottom-20 w-[200px] md:w-[300px] right-[-30%] md:right-[-10%] lg:right-[-28%]'>
              <img src={aboutCardImg} alt="" className='rounded-[20px]' />
            </div>
           


          </div>

          {/*________about content____*/}
          <div className='w-full lg:w-1/2 xl:w-[670px]'>
            <h2 className='heading'>One of the best choice</h2>
            <p className='text_para'>
              We pride ourselves on being one of the best choices.
              With a track record of excellence and a team of dedicated professionals, we consistently
              deliver outstanding results that make us a top choice among our patients.

            </p>

            <p className='text_para mt-[30px]'>
              Trust us to provide you with medical services that not only meets but exceeds your expectations.
              Make the smart choice today and experience why we are regarded as one of the best.
            </p>

            <Link to="/">
              <button className='btn'>Learn More</button>
            </Link>
          </div>


        </div>
      </div>

    </section>


    {/*_______about section end_____*/}

     {/*______services section______*/}
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our Medical Services</h2>
          <p className='text_para text-center'>
          From routine check-ups to specialized treatments, 
          we are here to support your journey to optimal health. 
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
    {/*_______service section end____*/}

    {/*feature section____*/}
    <section className='container'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        {/*_______feature content____*/} 
        <div className='xl:w-[500px]'>
          <h2 className='heading'>
            Get online medical care.<br />
          </h2>

          <ul className='pl-4'>
            <li className='text_para'>
              1. Schedule the appointment directly.
            </li>
            <li className='text_para'>
              2. Search for your doctor here.
            </li>
            <li className='text_para'>
              3. View our doctors and use the online scheduling system to select an appointment time.
            </li>
          </ul>
          <Link to="/">
            <button className='btn'>Learn More</button>
          </Link>
        </div>

        {/*_______Feature img____*/}
        <div className='xl:w-[650px] flex flex-col mt-[50px] lg:mt-0'>
          <img src={featureImg} className='w-3/4 h-[350px] rounded-[50px]' alt=''/>
          <div className='lg:w-[248px] bg-white  bottom-[50px] left-0 md:bottom-[50px] 
            p-1 pb-3 rounded-[10px] '>  
            <div className='flex items-center'>
                <div className='flex items-center gap-[6px] lg:gap-3'>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                    Mon, 24
                  </p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:ledaing-5 text-textColor font-[400]'>
                    09:00AM
                  </p> 
                </div>
                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={videoIcon} alt-=""></img>
                </span>
    
              </div>

              <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
              text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                Consultation
              </div>
              <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] h-[30px] w-[30px]'>
              <img src={avatarIcon} alt="" />
              <pre className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                Ruhi Rai
              </pre>
            </div>
            </div> 
        </div>
        </div>
      
    </section>
     {/*______feature section end___*/}
     {/*______Our doctors___*/}
     <section>
      <div className='container'>
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our doctors</h2>
          <p className='text_para text-center'>
          Our team of dedicated doctors is committed to 
          providing you with the highest quality healthcare services. 
          </p>
        </div>
        <DoctorList/>

      </div>

     </section>
     {/*______Our doctors end___*/}

     {/*______faq section___*/}
     <section>
      <div className='container'>
        <div className='2xl:h-[600px] h-[200px] flex justify-between gap-[50px] lg:gap-0'>
          <div className='w-[370px] hidden md:block' style={{ marginTop: '-70px' }}>
            <img src={faqImg} alt="" />
          </div>
          <div className='w-full md:w-1/2 '>
            <h2 className='heading'>Queries from our beloved patients</h2>
            <FaqList />
          </div>
          

          
        </div>

      </div>
     </section>
     {/*______faq section end___ */}

     

  </>)

};

export default Home;