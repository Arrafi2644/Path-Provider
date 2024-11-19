import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
const {signUpUser, updateUserNamePhoto} = useContext(AuthContext)
const navigate = useNavigate()

// console.log(signUpUser);
 const handleSignup = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    signUpUser(email, password)
    .then(result => {
      console.log(result.user);
      updateUserNamePhoto({displayName: name, photoURL: photo})
      .then(()=>{
          navigate('/')
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err.message);
    })
 }

    return (
        <div className="hero bg-base-200 mt-8 rounded-lg py-6">
        <div className="hero-content flex-col w-full md:w-9/12 lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sign up now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleSignup} className="card-body">
                
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-third text-primary">Sign up</button>
              </div>
            </form>
            <div className='px-8 pb-8'>
                <h2>Already have an account ? <Link className='text-third font-bold' to='/login'>Login</Link></h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;