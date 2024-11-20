import React, { useContext, useEffect } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounselorDetailsPage = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);

    const {selectCounselor} = useContext(DataContext)
    // console.log(selectCounselor);
    const {counselor, serviceName, counselorDetails} = selectCounselor[0];
    console.log(counselor, counselorDetails);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }


    return (
        <div className='border p-6 rounded-lg mt-8 flex flex-col gap-6 ' data-aos="fade-right">
            <div>
                <img className='rounded-lg' src={counselorDetails.counselorImage} alt="" />
            </div>
            <div className='space-y-2 text-gray-500'>
                <h3 className='text-xl font-bold'>Name: {counselor}</h3>
                <h4>Expertise: {serviceName}</h4>
                <p>Qualification: {counselorDetails.qualification}</p>
                <p>Experience: {counselorDetails.experience}</p>
                <p>{counselorDetails.counselorDescription}</p>
            </div>
            <div className='flex gap-6 text-3xl items-center my-4'>
              <Link><FaFacebookF></FaFacebookF></Link>
              <Link><FaLinkedin></FaLinkedin></Link>
              <Link><FaTwitter></FaTwitter></Link>
              
              
            </div>
            <Link onClick={handleBack} className='btn bg-third text-primary max-w-32'> <span><FaArrowLeftLong></FaArrowLeftLong></span> Back</Link>
            <Helmet>
        <meta charSet="utf-8" />
        <title>CounselorDetails | Pathfinder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        </div>
    );
};

export default CounselorDetailsPage;