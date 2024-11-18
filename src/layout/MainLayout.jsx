import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import './MainLayout.css'
const MainLayout = () => {
    return (
        <div className=' font-roboto'>
            <Navbar></Navbar>
            <div className='my-10 max-w-7xl w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;