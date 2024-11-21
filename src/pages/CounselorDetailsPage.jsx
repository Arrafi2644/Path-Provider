import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../provider/DataProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounselorDetailsPage = () => {
    // const { selectCounselor, services } = useContext(DataContext)
    const [allServices, setAllServices] = useState([])
    const {pathname} = useLocation()
    // console.log(pathname);
    const activeCounselorId = (pathname.split('/'));
    const activeId = activeCounselorId[activeCounselorId.length - 1];
    // console.log(activeId);

    const counselor= allServices.filter(service => service.counselorId == activeId)
    // console.log(counselor);
    // console.log(allServices);

    const showCounselorDetails = counselor[0]
    //  console.log(showCounselorDetails);


    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once
        });

        fetch('/services.json')
        .then(res => res.json())
        .then(data => setAllServices(data))

    }, []);

    // console.log(selectCounselor);
    // const {counselor, serviceName, counselorDetails} = selectCounselor[0];
    // console.log(counselor, counselorDetails);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }


    return (
        <div data-aos="zoom-out">
            {
                showCounselorDetails ? <div className='border p-6 rounded-lg mt-8 flex flex-col gap-6 ' >
                    <div>
                        <img className='rounded-lg' src={showCounselorDetails?.counselorDetails?.counselorImage} alt="" />
                    </div>
                    <div className='space-y-2 text-gray-500'>
                        <h3 className='text-xl font-bold'><span className='font-medium'>Name:</span> {showCounselorDetails?.counselor}</h3>
                        <h4><span className='font-medium'>Expertise:</span> {showCounselorDetails?.serviceName}</h4>
                        <p><span className='font-medium'>Qualification:</span> {showCounselorDetails?.counselorDetails?.qualification}</p>
                        <p><span className='font-medium'>Experience:</span> {showCounselorDetails?.counselorDetails?.experience}</p>
                        <p>{showCounselorDetails?.counselorDetails?.counselorDescription}</p>
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
                </div> : <div className='mt-8'>
                    <p>Go back to home and select a counselor to see this counselor's details <Link className='text-third font-semibold underline' to='/'>Go Home</Link></p>
                </div>
            }
        </div>
    );
};

export default CounselorDetailsPage;