import { Link } from 'react-router-dom';
import { doctors } from './../../assets/data/doctors';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  return (
    <Link to= "/doctors/1">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}/> )}
        </div>
        </Link>
  );
};

export default DoctorList