import React, { useContext, useEffect, useState } from 'react';
import ServiceCart from './serviceCart';
import { Link } from 'react-router-dom';
import { DataContext } from '../provider/DataProvider';
import { FaArrowRightLong } from "react-icons/fa6";


const ServiceSection = () => {
    // const [services, setServices] = useState([]);
    const {services, setServices} = useContext(DataContext)
    
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])



    return (
        <div className='mt-16 '>
            <h2 className='text-center font-bold text-third text-3xl mb-2'>Our Services</h2>  
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Explore tailored career counseling, skill development, resume building, and interview preparation to empower your journey and achieve your professional and academic aspirations.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
               {
                services.slice(0, 6).map(service => <ServiceCart key={service.serviceId} service={service}></ServiceCart>)
               }
            </div>
           <div className='flex justify-center md:justify-end'>
           <Link to='/services' className="btn bg-third text-primary mt-4 ">Explore All Services <span><FaArrowRightLong></FaArrowRightLong></span></Link>
           </div>
        </div>
    );
};

export default ServiceSection;