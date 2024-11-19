import React from 'react';
import AboutBanner from '../components/AboutBanner';
import career from '../assets/career.jpg';
import {  } from "react-icons/fa";
import { FaRightLong } from 'react-icons/fa6';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <div>
                <div className="hero min-h-screen pt-8">
                    <div className="hero-content flex-col items-start lg:flex-row-reverse">
                        <img
                            src={career}
                            className="w-full md:w-1/2 rounded-lg shadow-2xl" />
                        <div className='w-full md:w-1/2 flex flex-col items-start'>
                            <h3 className=' mb-2'>Why</h3>
                            <h1 className="text-4xl font-extrabold text-third">Choose us</h1>
                            <p className="py-6">
                            At Pathfinder, we are committed to empowering your career journey with personalized guidance and expert insights. Our team of skilled counselors provides proven strategies to help you identify opportunities, overcome challenges, and achieve your aspirations. With a focus on your success, we ensure every step is tailored to unlock your true potential. Choose us to navigate your future!
                            </p>
                            <button className="btn bg-third text-primary">Lets Join <span><FaRightLong></FaRightLong></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;