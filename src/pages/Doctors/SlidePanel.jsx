import React from 'react'

const SlidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text_para mt-0 font-semibold'>
                Fees
                </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    Rs.700
                </span>
        </div>
        <div className='mt-[30px]'>
            <p className='text_para mt-0 font-semibold text-headingColor'>
            Availaible Time:
            </p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between'>
                    <p className='text-[15px] leading-6 tet-textColor font-semibold'>
                        Monday
                    </p>
                    <p className= 'text-[15px] leading-6 tet-textColor font-semibold'>
                        9:00 AM - 11:00 AM
                    </p>
                </li>
                <li className='flex items-center justify-between'>
                    <p className='text-[15px] leading-6 tet-textColor font-semibold'>
                        Wednesday
                    </p>
                    <p className= 'text-[15px] leading-6 tet-textColor font-semibold'>
                        10:00 AM - 12:00 PM
                    </p>
                </li>
                <li className='flex items-center justify-between'>
                    <p className='text-[15px] leading-6 tet-textColor font-semibold'>
                        Friday
                    </p>
                    <p className= 'text-[15px] leading-6 tet-textColor font-semibold'>
                        9:00 AM - 11:00 AM
                    </p>
                </li>
            </ul>
        </div> 
        <button className='btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SlidePanel