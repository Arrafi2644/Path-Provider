import React, { useContext } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link } from 'react-router-dom';
import DashboardBanner from '../components/DashboardBanner';

const Dashboard = () => {
    const { bookedService, setBookedService } = useContext(DataContext)
    // console.log(bookedService);
    const { serviceId, image, serviceName, category, description, pricing, duration, counselor, rating, schedule, counselorDetails } = bookedService;
    // const { counselorImage, experience, qualification, counselorDescription } = bookedService?.counselorDetails;

    return (
        <div className='mt-0'>
            {/* <h2 className='text-center font-bold text-third text-3xl mb-2'>Dashboard</h2>
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Your personalized Dashboard offers easy access to upcoming sessions, completed milestones, recommended services, resources, and progress tracking to keep your career journey organized and efficient.</p> */}
            <DashboardBanner></DashboardBanner>
            {
                bookedService.schedule ? <div className='p-6 border rounded-lg '>
                    <h3 className='text-xl font-bold text-third mb-2'>You have booked: </h3>
                    <div>
                        <div className='flex flex-col lg:flex-row gap-6 '>
                            <div>
                                <img className='rounded-lg' src={image} alt="" />
                            </div>
                            <div className='text-gray-500 space-y-2'>
                                <h2 className='text-2xl font-semibold text-third'>{serviceName}</h2>
                                <div className='flex md:items-center justify-between flex-col md:flex-row gap-6'>
                                    <p className=''>Category: {category}</p>
                                    <p className=''>Fee: {pricing}</p>
                                </div>
                                <div className='flex md:items-center justify-between flex-col md:flex-row gap-6'>
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

                        <div className='mt-10'>
                            <h2 className='text-secondary font-bold text-xl mb-6'>Your Instructor</h2>
                            <div className='flex flex-col md:flex-row-reverse gap-6'>
                                <div>
                                    <img className=' w-full md:w-[300px] lg:w-[400px] rounded-lg' src={counselorDetails?.counselorImage} alt="" />
                                </div>
                                <div className='text-gray-500 font-medium space-y-2'>
                                    <h3>Name: {counselor}</h3>
                                    <h3>Expert: {serviceName}</h3>
                                    <p>Qualification: {counselorDetails?.qualification}</p>
                                    <p>Experience: {counselorDetails?.experience}</p>
                                    <p>Description: {counselorDetails?.counselorDescription}</p>
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
                                            schedule?.map(item => {

                                                return <tr key={schedule.indexOf(item)}>
                                                    <th>{schedule?.indexOf(item) + 1}</th>
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
                </div> : <div className='mt-10'>
                <h2 className='text-2xl font-bold'>No service booked</h2>
                <h3 className='font-medium'>Go to service page and book a service to build your career <Link to='/services' className='text-third underline font-semibold'>Go to Service</Link></h3>
            </div>
            }
            
        </div>
    );
};

export default Dashboard;