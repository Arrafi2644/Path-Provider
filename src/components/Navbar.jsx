import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext)
    // console.log(user?.displayName);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        {
            user && <>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/profile'>My Profile</NavLink></li>
            </>
        }
        <li><NavLink to='/contact'>Contact Us</NavLink></li>


    </>

    const handleLogout = () => {
        logoutUser();
        toast.warn("Logged out !!!")
    }

    return (
        <div className='bg-primary text-secondary sticky top-0 left-0 z-10'>
            <div className=" max-w-7xl w-11/12 mx-auto navbar px-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl pl-0 text-third">Pathfinder</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    {
                        (user && user?.photoURL) ? <img className={`w-10 h-10 rounded-full cursor-pointer `} src={user?.photoURL} alt="" title={user.displayName} /> : user ? <h2> {user?.dislayName}</h2> : "" 
                      
                    }

                    {
                        user ? <div className='flex gap-2 items-center'>

                            <button onClick={handleLogout} className='btn px-6 bg-third text-primary'>Logout</button>
                        </div> : <div>
                            <Link to='/login' className='btn px-6 bg-third text-primary'>Login</Link>
                        </div>
                    }

                </div>
            </div>



          
        </div>
        
    );
};

export default Navbar;