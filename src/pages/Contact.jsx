import React, { useEffect } from 'react';
import ContactBanner from '../components/ContactBanner';
import { MdCalendarMonth, MdFacebook, MdLocationPin, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });

      }, []);
    return (
        <div>
            <div data-aos="fade-down">
                <ContactBanner></ContactBanner>
            </div>
            <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 '>
                <div  className='border p-6 rounded-lg '>

                    <h3 className='text-xl font-bold mb-5'>Pathprovider</h3>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 font-medium'> <span><MdCalendarMonth></MdCalendarMonth></span>Open: Sun - Fri</p>
                        <p className='text-sm ml-6'>10am - 6pm</p>
                    </div>
                    <div className='flex flex-col  my-6'>
                        <p className='flex items-center gap-2 font-medium'> <span><MdLocationPin></MdLocationPin></span> Fallbrook California 9210, USA</p>
                        <p className='text-sm ml-6'>Event Address</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='flex items-center gap-2 font-medium'> <span><MdPhone></MdPhone></span>01751166818</p>
                        <p className='text-sm ml-6'>Phone</p>
                    </div>

                    <div className='flex flex-col mt-6'>
                        <h2 className='text-lg mb-3 font-bold'>Follow us on</h2>
                        <div className='flex items-center gap-3 text-2xl'>
                            <span className='cursor-pointer'><FaFacebook></FaFacebook></span>
                            <span className='cursor-pointer'><FaTwitter></FaTwitter></span>
                            <span className='cursor-pointer'><FaInstagram></FaInstagram></span>
                            <span className='cursor-pointer'><FaLinkedin></FaLinkedin></span>
                        </div>
                    </div>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106629.68553400089!2d-117.2973999046684!3d33.36642720748661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8f37ba1228b7%3A0x85c0d1d05c1aa1b4!2sFallbrook%2C%20CA%2092028%2C%20USA!5e0!3m2!1sen!2sbd!4v1732198155459!5m2!1sen!2sbd" className='w-full h-[400px] rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 
                </div>
            </div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Contact;