import React, { useContext, useEffect, useState } from 'react';
import ServiceCart from '../components/serviceCart';
import { Link } from 'react-router-dom';
import { DataContext } from '../provider/DataProvider';


const Services = () => {
  const {services, setServices} = useContext(DataContext);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    // console.log(services);

    return (
        <div className='mt-10 '>
            <h2 className='text-center font-bold text-third text-3xl mb-2'>Our Services</h2>  
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Explore tailored career counseling, skill development, resume building, and interview preparation to empower your journey and achieve your professional and academic aspirations.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
               {
                services?.map(service => <ServiceCart key={service.serviceId} service={service}></ServiceCart>)
               }
            </div>

        </div>
    );
};

export default Services;