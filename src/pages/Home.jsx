import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import CoachingBenefits from './CoachingBenefits';
import ServiceSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);

    return (
        <div>
           <div data-aos="zoom-in">
           <Banner></Banner>
           </div>
            <div data-aos="fade-up">
            <CoachingBenefits></CoachingBenefits>
            </div>
            <div data-aos="fade-left">
            <ServiceSection></ServiceSection>
            </div>
           <div data-aos="fade-right">
           <TeamSection></TeamSection>
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