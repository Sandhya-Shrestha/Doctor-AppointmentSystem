import { formatDate } from '../../utils/formatDate'

const Doctorabout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'> 
        About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Dr. Sara Khan
          </span>
        </h3>
        <p className='"text_para'>
        Dr. Sara khan is a committed neurologist ,reputable for her skill in diagnosing and treating brain problems. 
        She has achieved great advancements in the discipline by concentrating her career on innovative research. 
        Her kind manner teaches confidence and comfort in her patients.A respected person in the field, 
        Dr. Sara Khan is known for her dedication to neurological treatment and her influence on the medical community. 
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Qualification
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formatDate("06-08-1990")} - {formatDate("01-06-1995")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PHD in Neurology
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
                Medical College, Nepal
              </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
              {formatDate("02-20-1985")} - {formatDate("05-02-1989")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Masters in Neurology
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
                New Neurology College, Nepal
              </p>
          </li>
        </ul>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#ADD8E6]'>
            <span className='text-irisBlueColor text-[14px] leading-6 font-semibold'>
            {formatDate("06-08-1998")} - {formatDate("06-08-2000")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Jr.Neurologist
            </p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              Civil Hospital, New Baneshwor
            </p>
          </li>

          <li className='p-4 rounded bg-[#ADD8E6]'>
            <span className='text-irisBlueColor text-[14px] leading-6 font-semibold'>
            {formatDate("06-08-2018")} - {formatDate("06-08-2023")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr.Neurologist
            </p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              Hams Hospital, Dumbarahi
            </p>
          </li>
        </ul>
      </div>

    </div>
    
  )
}

export default Doctorabout