import React, { useEffect, useState } from 'react';
import jhank from '../../src/assets/jhank.jfif'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import './styles.css';

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonial = () => {
    const [clients, setClients] = useState([])

    console.log(clients);
        useEffect(()=>{
            fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setClients(data))
        }, [])


    return (
        <div className='mt-16 '>
            <h2 className='text-center font-bold text-third text-3xl mb-2'>What Our Clients Say</h2>  
            <p className='text-center w-full text-gray-500 md:w-3/5 mx-auto mb-6'>Hear from those we've guided on their path to success.</p>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper">
               
               
               {
                clients.map(client =>  <SwiperSlide key={client.id}>
                    
                    <div className='w-4/5 lg:3/5 mx-auto flex flex-col items-center border rounded-lg p-6 bg-primary'>
                        <img className='w-20 h-20 rounded-full' src={client.image} alt="" />
                        <h2 className='font-bold text-lg mb-2 mt-4'>{client.name}</h2>
                        <h3  className='font-medium'>Course: {client.course}</h3>
                        <p className='text-gray-500 text-sm text-center mb-6'> "{client.review}" </p>
                    </div>
                </SwiperSlide>)
               }
                
            </Swiper>
        </div>
    );
};

export default Testimonial;
