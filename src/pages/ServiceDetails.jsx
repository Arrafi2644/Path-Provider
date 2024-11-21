import React, { act, useContext, useEffect, useState } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../provider/AuthProvider';
import {handleSetServiceToLocal} from '../components/index.js'

const ServiceDetails = () => {
    const {setBookedService } = useContext(DataContext)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    console.log(user.photoURL);

    const [feedback, setFeedback] = useState(null);
    const [allServices, setAllServices] = useState([]);
    const { pathname } = useLocation();
    const activeServiceId = (pathname.split('/'));
    const activeId = activeServiceId[activeServiceId.length - 1];
    const activeService = allServices?.filter(item => item.serviceId === activeId);
    const showDetails = activeService[0];
// console.log(showDetails);

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });

        fetch('/services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
      }, []);

      const handleBack = () => {
         navigate(-1)
      }

    const purchasePlan = () => {
        setBookedService(showDetails);
        handleSetServiceToLocal(showDetails)
        toast.success("Congratulation.!!! Successfully purchased.")
    }


    const handleFeedback = (e) => {
        e.preventDefault();
        const feedbackMessage = e.target.feedback.value;
        setFeedback(feedbackMessage);
        e.target.reset();

    }

    handleSetServiceToLocal

    return (
        <div className='mt-4 p-6 bg-primary rounded-lg' data-aos="zoom-out">
            <div className='flex flex-col lg:flex-row gap-6 '>
                <div>
                    <img className='rounded-lg' src={showDetails?.image} alt="" />
                </div>
                <div className='text-gray-500 space-y-2'>
                    <h2 className='text-2xl font-semibold text-third'>{showDetails?.serviceName}</h2>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                        <p className=''>Category: {showDetails?.category}</p>
                        <p className=''>Fee: {showDetails?.pricing}</p>
                    </div>
                    <div className='flex items-center justify-between flex-col md:flex-row gap-6'>
                        <p>Duration: {showDetails?.duration}</p>
                        <p className=''>Counselor: {showDetails?.counselor}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className=''>Rating: {showDetails?.rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                            <input type="radio " name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className=''>{showDetails?.description}</p>

                   <div className="flex gap-2">
                   <Link onClick={handleBack} className="btn bg-third text-primary px-8">  Back</Link>
                   <Link  onClick={purchasePlan} to='/dashboard' state={showDetails} className="btn bg-third text-primary">Select this plan</Link>
                   </div>


                </div>
            </div>
            <div className='mt-8 text-third'>
                <h2 className='text-2xl font-bold text-center '>Feedback for this service</h2>
                <div >
                    {
                        feedback && <div className='p-4 text-gray-500 mt-2 border rounded-lg'>
                            <div className='flex gap-3'>
                               <img className='w-8 h-8 rounded-full ' src={user?.photoURL} alt="" />
                             <p>{feedback}</p>
                            </div>
                        </div>
                    }
                </div>
                <form onSubmit={handleFeedback}>
                    <textarea name='feedback' className="textarea text-secondary textarea-bordered w-full mt-4" placeholder="Write your feedback"></textarea>
                    <input className="btn bg-third text-primary" type="submit" value="Feedback" />
                </form>
            </div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Service Details | Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default ServiceDetails;