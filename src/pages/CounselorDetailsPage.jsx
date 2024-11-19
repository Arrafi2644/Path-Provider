import React, { useContext } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const CounselorDetailsPage = () => {

    const {selectCounselor} = useContext(DataContext)
    // console.log(selectCounselor);
    const {counselor, serviceName, counselorDetails} = selectCounselor[0];
    console.log(counselor, counselorDetails);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }


    return (
        <div className='border p-6 rounded-lg mt-8 flex flex-col gap-6 '>
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
        </div>
    );
};

export default CounselorDetailsPage;