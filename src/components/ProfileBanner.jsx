import React from 'react';

const ProfileBanner = () => {
    return (
        <div className=''>
        <div className='relative'>
            <img className='w-full max-h-56 object-cover' src="https://i.ibb.co.com/bFBwHrH/pexels-olly-3760069.jpg" alt="" />

            <div className='text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <h2 className='font-semibold text-2xl text-secondary'>Your Profile</h2>
                <p className='font-medium text-gray-600'>Manage your profile, update details, and personalize your career journey effortlessly.</p>
            </div>
        </div>
    </div>
    );
};

export default ProfileBanner;