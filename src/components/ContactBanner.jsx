import React from 'react';

const ContactBanner = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img className='w-full max-h-56 object-cover' src="https://i.ibb.co.com/bFBwHrH/pexels-olly-3760069.jpg" alt="" />

                <div className='text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <h2 className='font-semibold text-2xl text-secondary'>Contact us</h2>
                    <p className='font-medium text-gray-600'>We’re Here to Help — Reach Out for Career Guidance and Support.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;