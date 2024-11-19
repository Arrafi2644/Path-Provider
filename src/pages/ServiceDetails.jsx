import React, { useContext, useState } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const { services, activeCategory, bookedService , setBookedService } = useContext(DataContext)
    const [feedback, setFeedback] = useState(null);

    const showServiceDetails = services?.filter(item => item.serviceId === activeCategory);
    // console.log(showServiceDetails);

    // const { serviceId, image, serviceName, category, description, pricing, duration, counselor, rating } = showServiceDetails?.[0];
    const booked = showServiceDetails?.[0];
    const navigate = useNavigate()
    const {pathname} = useLocation();
    console.log(pathname);
    console.log(showServiceDetails?.[0]);


    const purchasePlan = () => {
        navigate('/dashboard')
            setBookedService(booked)
            toast.success("Congratulation.!!! Successfully purchased.")   
        }
    

    const handleFeedback = (e) => {
     e.preventDefault();
     const feedbackMessage = e.target.feedback.value;
     setFeedback(feedbackMessage);
     e.target.reset();

    }
  

    return (
        <div className='mt-4 p-6 bg-primary rounded-lg'>
            <div className='flex flex-col lg:flex-row gap-6 '>
                <div>
                    <img className='rounded-lg' src={showServiceDetails?.[0]?.image} alt="" />
                </div>
                <div className='text-gray-500 space-y-2'>
                    <h2 className='text-2xl font-semibold text-third'>{showServiceDetails?.[0]?.serviceName}</h2>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                        <p className=''>Category: {showServiceDetails?.[0]?.category}</p>
                        <p className=''>Fee: {showServiceDetails?.[0]?.pricing}</p>
                    </div>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                        <p>Duration: {showServiceDetails?.[0]?.duration}</p>
                        <p className=''>Counselor: {showServiceDetails?.[0]?.counselor}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className=''>Rating: {showServiceDetails?.[0]?.rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                            <input type="radio " name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className=''>{showServiceDetails?.[0]?.description}</p>

                    <Link to='/services' className="btn bg-third text-primary">Back to services</Link>
                    <Link onClick={purchasePlan} className="btn bg-third text-primary">Select this plan</Link>


                </div>
            </div>
            <div className='mt-8 text-third'>
                <h2 className='text-2xl font-bold text-center '>Feedback for this service</h2>
                 <div >
                    {
                        feedback && <div className='p-4 text-gray-500 mt-2 border rounded-lg'>
                            <p>{feedback}</p>
                        </div>
                    }
                 </div>
                <form onSubmit={handleFeedback}>
                <textarea name='feedback' className="textarea text-secondary textarea-bordered w-full mt-4" placeholder="Write your feedback"></textarea>
                <input className="btn bg-third text-primary" type="submit" value="Feedback" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;