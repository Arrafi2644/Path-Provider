import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Note the updated path for modules
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';



const HomeBanner = () => {
    return (
        <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay: 3000, // Time between slides (in ms)
            disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
    >
        <SwiperSlide>
        <div id="slide1" className="carousel-item relative w-full">
            <img
                src="https://i.ibb.co.com/3TMKCyY/pexels-anna-nekrashevich-7552568.jpg"
                className="w-full max-h-[500px] min-h-[400px] object-cover rounded-lg" />
            <div className='absolute w-full rounded-lg h-full'></div>
            <div className='absolute p-8 pl-16 w-full md:w-3/5 lg:w-1/2 top-1/2 -translate-y-1/2'>
                <h3 className='font-bold text-3xl text-third'>Find Your Path, Shape Your Future!</h3>
                <p className='my-2 text-gray-700 font-medium'>Discover the career that aligns with your passions and skills. Let Pathfinder guide you to success with expert counseling and tailored resources</p>
                <Link to='/services' className="btn bg-third text-primary">Start Your Journey</Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn bg-[#ffffff4a] text-third ">❮</a>
                <a href="#slide2" className="btn bg-[#ffffff4a] text-third ">❯</a>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide2" className="carousel-item relative w-full">
            <img
                src="https://i.ibb.co.com/YD8C1HY/pexels-olly-3756681.jpg"
                className="w-full max-h-[500px]  min-h-[400px] object-cover rounded-lg" />

            <div className='absolute w-full rounded-lg h-full'></div>

            <div className='absolute p-8 pl-16 w-full md:w-3/5 lg:w-1/2 top-1/2 -translate-y-1/2'>
                <h3 className='font-bold text-3xl text-third'>Personalized Career Guidance at Your Fingertips</h3>
                <p className='my-2 text-gray-700 font-medium'>Take the next step with services like career assessments, mock interviews, and resume building. Your dream career is closer than you think.</p>
                <button className="btn bg-third text-primary">Explore Services</button>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn bg-[#ffffff4a] text-third ">❮</a>
                <a href="#slide3" className="btn bg-[#ffffff4a] text-third ">❯</a>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="slide3" className="carousel-item relative w-full">
            <img
                src="https://i.ibb.co.com/k3gvT6X/pexels-timur-weber-8560026.jpg"
                className="w-full max-h-[500px] min-h-[400px] object-cover rounded-lg" />
            <div className='absolute w-full rounded-lg h-full'></div>
            <div className='absolute p-8 pl-16 w-full md:w-3/5 lg:w-1/2 top-1/2 -translate-y-1/2'>
                <h3 className='font-bold text-3xl text-third'>Real Stories, Real Success!</h3>
                <p className='my-2 text-gray-700 font-medium'>Thousands have found their ideal career paths through Pathfinder. Join a growing community of achievers who’ve unlocked their potential.</p>
                <button className="btn bg-third text-primary">See Success Stories</button>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn bg-[#ffffff4a] text-third ">❮</a>
                <a href="#slide1" className="btn bg-[#ffffff4a] text-third ">❯</a>
            </div>
        </div>
        </SwiperSlide>
    </Swiper>

    //     <div className="carousel w-full mb-10">
       
     
    // </div>
    );
};

export default HomeBanner;