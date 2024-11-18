import React, { useContext } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {bookedService, setBookedService} = useContext(DataContext)
    console.log(bookedService);
    const { serviceId, image, serviceName, category, description, pricing, duration, counselor, rating } = bookedService;
    return (
        <div className='mt-8'>
            <h2 className='text-center font-bold text-third text-3xl mb-2'>Dashboard</h2>  
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Your personalized Dashboard offers easy access to upcoming sessions, completed milestones, recommended services, resources, and progress tracking to keep your career journey organized and efficient.</p>
            <div className='p-6 border rounded-lg '>
                <h3 className='text-xl font-bold text-third mb-2'>You have booked: </h3>
                <div>
                <div className='flex flex-col lg:flex-row gap-6 '>
                <div>
                    <img className='rounded-lg' src={image} alt="" />
                </div>
                <div className='text-gray-500 space-y-2'>
                    <h2 className='text-2xl font-semibold text-third'>{serviceName}</h2>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                        <p className=''>Category: {category}</p>
                        <p className=''>Fee: {pricing}</p>
                    </div>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                        <p>Duration: {duration}</p>
                        <p className=''>Counselor: {counselor}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className=''>Rating: {rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                            <input type="radio " name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className=''>{description}</p>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;