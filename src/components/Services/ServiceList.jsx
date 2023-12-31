import React from 'react'
import { services } from'../../assets/data/services';
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  return (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
    {services.map((item,index)=> (
    <ServiceCard item={item} index={index} key={index}/>))}
  </div>

  
  );
};
<section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our Medical Services</h2>
          <p className='text_para text-center'>
          From routine check-ups to specialized treatments, 
          we are here to support your journey to optimal health. 
          </p>
        </div>

      </div>
    </section>
export default ServiceList