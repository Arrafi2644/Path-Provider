import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
const {loginUser} = useContext(AuthContext)
const navigate = useNavigate()
const {pathname, state} = useLocation();
console.log(state);

    const handleLogin = (e) => {
      e.preventDefault();

      const form = new FormData(e.target);
      
      const email = form.get('email')
      const password = form.get('password')
      console.log(email, password);

      loginUser(email, password)
      .then(result => {
        console.log(result);
        state ? navigate(state) : navigate('/')
        
      }).catch(err => {
        console.log(err.message);
      })

    }


    return (
        <div className="hero bg-base-200 mt-8 rounded-lg py-6">
        <div className="hero-content flex-col w-full md:w-9/12 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
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
      </div>
    );
};

export default Login;