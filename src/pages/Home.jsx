import React, { useEffect } from 'react';
import CoachingBenefits from './CoachingBenefits';
import ServiceSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeBanner from '../components/HomeBanner';
import Testimonial from '../components/Testimonial';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);

    return (
        <div>
           <div data-aos="zoom-in" className='mb-16'>
           {/* <Banner></Banner> */}
           <HomeBanner></HomeBanner>
           </div>
            <div data-aos="fade-up">
            <CoachingBenefits></CoachingBenefits>
            </div>
            <div data-aos="fade-up">
            <ServiceSection></ServiceSection>
            </div>
           <div data-aos="fade-up">
           <TeamSection></TeamSection>
           </div>
           <div data-aos="fade-down">
            <Testimonial></Testimonial>
           </div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Home;