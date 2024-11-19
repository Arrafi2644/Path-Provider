import React from 'react';
import Banner from '../components/Banner';
import CoachingBenefits from './CoachingBenefits';
import ServiceSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoachingBenefits></CoachingBenefits>
            <ServiceSection></ServiceSection>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;