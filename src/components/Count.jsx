import React from 'react';
import { MdOutlineGroupAdd } from "react-icons/md";
import { FaLaptop, FaRegClock } from "react-icons/fa";

const Count = () => {
    return (
        <div className='bg-primary grid grid-cols-1 md:grid-cols-3 mt-16'>
            <div className='bg-primary p-8 flex items-center justify-center'>
                <div className='text-5xl mr-4'><MdOutlineGroupAdd></MdOutlineGroupAdd></div>
                <div>
                    <h3 className=' font-semibold'>Happy Clients</h3>
                    <h2 className='text-3xl font-bold'>55250</h2>
                </div>
            </div>
            <div className='bg-third p-8 flex text-primary justify-center items-center'>
                <div className='text-5xl mr-4'><FaRegClock></FaRegClock></div>
                <div>
                    <h3 className=' font-semibold'>Hours of Counselling</h3>
                    <h2 className='text-3xl font-bold'>101780</h2>
                </div>
            </div>
            <div className='bg-primary p-8 flex justify-center items-center'>
                <div className='text-5xl mr-4'><FaLaptop></FaLaptop></div>
                <div>
                    <h3 className=' font-semibold'>Happy Clients</h3>
                    <h2 className='text-3xl font-bold'>70255</h2>
                </div>
            </div>
            
        </div>
    );
};

export default Count;