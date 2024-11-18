import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../provider/DataProvider';

const ServiceCart = ({service}) => {
    console.log(service);
    const {serviceId, image, serviceName, category, pricing, counselor} = service;
    const {activeCategory, setActiveCategory} = useContext(DataContext)
    // console.log(service);
    // console.log(activeCategory);
    const navigate = useNavigate()
    
    const handleGetService = (id) => {
        setActiveCategory(id);
        navigate(`/services/serviceDetails/${id}`)

    }
    return (
        <div className='border rounded-lg p-6'>
            <div>
                <img className='h-48 md:h-40 w-full object-cover rounded-lg' src={image} alt="" />
            </div>
            <div className='space-y-1 mt-4'>
                <h3 className='font-bold text-xl'>{serviceName}</h3>
                <p className='font-medium'>Category: {category}</p>
                <p className='font-medium'>Price: {pricing}</p>
                <p className='font-medium'>Counselor: {counselor}</p>
                <Link onClick={()=>handleGetService(serviceId)} className='btn bg-third text-primary'>Learn More</Link>
            </div>
        </div>
    );
};

export default ServiceCart;