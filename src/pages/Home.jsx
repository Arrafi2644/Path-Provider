import React from 'react';
import Banner from '../components/Banner';
import CoachingBenefits from './CoachingBenefits';
import ServiceSection from '../components/ServiceSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoachingBenefits></CoachingBenefits>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;