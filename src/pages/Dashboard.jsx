import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useLocation } from 'react-router-dom';
import DashboardBanner from '../components/DashboardBanner';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { handleGetServiceFromLocal } from "../components/index.js";

const Dashboard = () => {
    // const [service, setService] = useState(null)
    const { bookedService, setBookedService } = useContext(DataContext)
    // console.log(bookedService);
    // const { serviceId, image, serviceName, category, description, pricing, duration, counselor, rating, schedule, counselorDetails } = bookedService;
    // const { counselorImage, experience, qualification, counselorDescription } = bookedService?.counselorDetails;
    const { state } = useLocation()
    // const { serviceId, image, serviceName, category, description, pricing, duration, counselor, rating, schedule, counselorDetails } = state;
    console.log(state);
    console.log(bookedService);
    const length = handleGetServiceFromLocal().length
    console.log(length);
    console.log(handleGetServiceFromLocal()[length - 1]);
    const showService = handleGetServiceFromLocal()[length - 1];
    console.log(showService);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once
        });

        // setService(state)
    }, []);

    return (
        <div className='mt-0' >
            {/* <h2 className='text-center font-bold text-third text-3xl mb-2'>Dashboard</h2>
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Your personalized Dashboard offers easy access to upcoming sessions, completed milestones, recommended services, resources, and progress tracking to keep your career journey organized and efficient.</p> */}
            <div data-aos="fade-down">
                <DashboardBanner></DashboardBanner>
            </div>
            <div data-aos="fade-up">
                {
                    state ? <div className='p-6 border rounded-lg '>
                        <h3 className='text-2xl font-bold text-third mb-2'>You have booked: </h3>
                        <div>
                            <div className='flex flex-col lg:flex-row gap-6 '>
                                <div>
                                    <img className='rounded-lg' src={state?.image} alt="" />
                                </div>
                                <div className='text-gray-500 space-y-2'>
                                    <h2 className='text-xl font-semibold text-third'>{state?.serviceName}</h2>
                                    <div className='flex md:items-center justify-between flex-col md:flex-row gap-6'>
                                        <p className=''>Category: {state?.category}</p>
                                        <p className=''>Fee: {state?.pricing}</p>
                                    </div>
                                    <div className='flex md:items-center justify-between flex-col md:flex-row gap-6'>
                                        <p>Duration: {state?.duration}</p>
                                        <p className=''>Counselor: {state?.counselor}</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <p className=''>Rating: {state?.rating}</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                                            <input type="radio " name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                                            <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                    <p className=''>{state?.description}</p>
                                </div>
                            </div>

                            <div className='mt-10'>
                                <h2 className='text-secondary font-bold text-xl mb-6'>Your Instructor</h2>
                                <div className='flex flex-col md:flex-row-reverse gap-6'>
                                    <div>
                                        <img className=' w-full md:w-[300px] lg:w-[400px] rounded-lg' src={state?.counselorDetails?.counselorImage} alt="" />
                                    </div>
                                    <div className='text-gray-500 font-medium space-y-2'>
                                        <h3>Name: {state?.counselor}</h3>
                                        <h3>Expert: {state?.serviceName}</h3>
                                        <p>Qualification: {state?.counselorDetails?.qualification}</p>
                                        <p>Experience: {state?.counselorDetails?.experience}</p>
                                        <p>Description: {state?.counselorDetails?.counselorDescription}</p>
                                    </div>

                                </div>
                            </div>
                            <div className='mt-10'>
                                <h2 className='text-secondary font-bold text-xl mb-6'>Class Schedule</h2>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Day</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}

                                            {
                                                state?.schedule?.map(item => {

                                                    return <tr key={state?.schedule.indexOf(item)}>
                                                        <th>{state?.schedule?.indexOf(item) + 1}</th>
                                                        <td>{item.day}</td>
                                                        <td>{item.time}</td>
                                                    </tr>
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                        : (handleGetServiceFromLocal().length > 0) ? <div className='p-6 border rounded-lg '>
                            <h3 className='text-2xl font-bold text-third mb-2'>You have booked: </h3>
                            <div>
                                <div className='flex flex-col lg:flex-row gap-6 '>
                                    <div>
                                        <img className='rounded-lg' src={showService?.image} alt="" />
                                    </div>
                                    <div className='text-gray-500 space-y-2'>
                                        <h2 className='text-xl font-semibold text-third'>{showService?.serviceName}</h2>
                                        <div className='flex md:items-center justify-between flex-col md:flex-row gap-6'>
                                            <p className=''>Category: {showService?.category}</p>
                                            <p className=''>Fee: {showService?.pricing}</p>
                                        </div>
                                        <div className='flex md:items-center justify-between flex-col md:flex-row gap-6'>
                                            <p>Duration: {showService?.duration}</p>
                                            <p className=''>Counselor: {showService?.counselor}</p>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <p className=''>Rating: {showService?.rating}</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                                                <input type="radio " name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" defaultChecked />
                                                <input type="radio" name="rating-2" className="mask h-5 w-5 mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                        <p className=''>{showService?.description}</p>
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <h2 className='text-secondary font-bold text-xl mb-6'>Your Instructor</h2>
                                    <div className='flex flex-col md:flex-row-reverse gap-6'>
                                        <div>
                                            <img className=' w-full md:w-[300px] lg:w-[400px] rounded-lg' src={showService?.counselorDetails?.counselorImage} alt="" />
                                        </div>
                                        <div className='text-gray-500 font-medium space-y-2'>
                                            <h3>Name: {showService?.counselor}</h3>
                                            <h3>Expert: {showService?.serviceName}</h3>
                                            <p>Qualification: {showService?.counselorDetails?.qualification}</p>
                                            <p>Experience: {showService?.counselorDetails?.experience}</p>
                                            <p>Description: {showService?.counselorDetails?.counselorDescription}</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <h2 className='text-secondary font-bold text-xl mb-6'>Class Schedule</h2>
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Day</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* row 1 */}

                                                {
                                                    showService?.schedule?.map(item => {

                                                        return <tr key={showService?.schedule.indexOf(item)}>
                                                            <th>{showService?.schedule?.indexOf(item) + 1}</th>
                                                            <td>{item.day}</td>
                                                            <td>{item.time}</td>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : 
                             <div className='mt-10'>
                            <h2 className='text-2xl font-bold'>No service booked</h2>
                            <h3 className='font-medium'>Go to service page and book a service to build your career <Link to='/services' className='text-third underline font-semibold'>Go to Service</Link></h3>
                        </div>


                }
            </div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Dashboard;