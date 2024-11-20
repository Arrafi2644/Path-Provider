import React from 'react';
import { RiRoadMapLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { FaPersonRays } from "react-icons/fa6";


const CoachingBenefits = () => {
    return (
        <section>
            <h2 className='text-center font-bold text-third text-3xl mb-2'>Coaching Benefits</h2>
            <p className='text-center w-full text-gray-500 md:w-3/5  mx-auto'>Unlock personalized guidance, build confidence, enhance skills, and gain clarity to achieve your career goals effectively.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
             <div className='text-center border p-6 rounded-lg text-secondary flex flex-col gap-2'>
                <span className='text-center text-5xl font-bold mx-auto mb-4 text-third'><RiRoadMapLine /></span>
                <h3 className='text-xl font-bold'>Personalized <br /> Career Roadmap</h3>
                <p className='text-gray-500'>Receive tailored guidance to match your strengths, passions, and goals, ensuring a clear and achievable path to career success.</p>
             </div>
             <div className='text-center border p-6 rounded-lg text-secondary flex flex-col gap-2'>
                <span className='text-center text-5xl font-bold mx-auto mb-4 text-third'><GiSkills /></span>
                <h3 className='text-xl font-bold'>Skill Enhancement</h3>
                <p className='text-gray-500'>Develop essential skills like communication, leadership, and time management through expert coaching, making you stand out in your professional journey.</p>
             </div>
             <div className='text-center border p-6 rounded-lg text-secondary flex flex-col gap-2'>
                <span className='text-center text-5xl font-bold mx-auto mb-4 text-third'><FaPersonRays /></span>
                <h3 className='text-xl font-bold'> Confidence Building</h3>
                <p className='text-gray-500'>Overcome doubts and boost self-assurance with professional support, empowering you to excel in interviews, presentations, and career challenges.</p>
             </div>
             <div className='text-center border p-6 rounded-lg text-secondary flex flex-col gap-2'>
                <span className='text-center text-5xl font-bold mx-auto mb-4 text-third'><GoGoal /></span>
                <h3 className='text-xl font-bold'>Goal Setting and Achievement</h3>
                <p className='text-gray-500'>Learn to set realistic career goals and create actionable plans, ensuring steady progress toward your long-term professional aspirations.</p>
             </div>
            </div>
        </section>
    );
};

export default CoachingBenefits;