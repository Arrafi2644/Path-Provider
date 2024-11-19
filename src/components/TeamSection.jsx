import React, { useContext } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useNavigate } from 'react-router-dom';

const TeamSection = () => {
    const {services, setSelectCounselor} = useContext(DataContext)
    const navigate = useNavigate()

    // console.log(services);
    const handleSelect = (id) => {

        console.log(id);
        // console.log(services);
        const selectedCounselor = services.filter(service => service.counselorId === id)
        // console.log(selectedCounselor);
        setSelectCounselor(selectedCounselor)
        // navigate()

    }
    return (
        <div className='mt-10'>
             <h2 className='text-center font-bold text-third text-3xl mb-2'>Meet Our Expert Team</h2>  
             <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Our team of dedicated career counselors and industry experts is committed to guiding you toward success, providing personalized support to help you achieve your dreams.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                {
                    services.map(service => {
                        const {counselor, counselorId, serviceName, counselorDetails} = service
                       return <div key={counselorId} className='border mt-6 p-6 rounded-lg flex flex-col '>
                             <img className='rounded-lg h-60 w-auto object-cover mb-4' src={counselorDetails.counselorImage} alt="" />
                            <h2 className='font-semibold'>Counselor: {counselor}</h2>
                            <h3 className='font-medium grow'>Expertise: {serviceName}</h3>
                             <Link to={`/counselorDetails/${counselorId}`} onClick={()=>handleSelect(counselorId)} className='btn bg-third text-white w-full'>Show details</Link>
                        </div>
                        
                    })
                }
            </div>
        </div>
    );
};

export default TeamSection;