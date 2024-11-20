import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const { pathname, state } = useLocation();
  // console.log(state);
  const [showPassword, setShowPassword] = useState(false);
  // console.log(showPassword);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    })
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);

    loginUser(email, password)
      .then(result => {
        // console.log(result);
        state ? navigate(state) : navigate('/')
        toast.success("Successfully logged in.")

      }).catch(err => {
        console.log(err.message);
        toast.error("Incorrect password!!!")
      })

  }

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result);
        state ? navigate(state) : navigate('/')
        toast.success("Logged in successfully.")
      }).catch(err => {
        console.log(err.message);
      })
  }


  return (
    <div data-aos="fade-left" className="hero bg-base-200 mt-8 rounded-lg py-6">
      <div className="hero-content flex-col w-full md:w-9/12 lg:w-1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">



          <div className='px-8 pt-8'>
            <button onClick={handleLoginWithGoogle} className="btn btn-outline w-full hover:text-primary hover:bg-third"><span><FaGoogle></FaGoogle></span> Sign in with Google</button>
            <div className="divider">or</div>
          </div>
          <form onSubmit={handleLogin} className="card-body pt-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
              <div className='absolute right-3 top-[52px]'>
                <Link onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </Link>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-third text-primary">Login</button>
            </div>
          </form>
          <div className='px-8 pb-8'>
            <h2>Don't have any account ? <Link className='text-third font-semibold' to='/signup'>Signup</Link></h2>
          </div>
        </div>
      </div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | Pathfinder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default Login;