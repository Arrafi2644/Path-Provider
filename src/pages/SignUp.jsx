import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  const { signUpUser, updateUserNamePhoto, user, setUser, loginWithGoogle } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
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

    if (password.length < 6) {
      toast.error("Password must be longer or equal 6 character.!!!")
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("You must include at least one lowercase letter in password.!!!");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("You must include at least one uppercase letter in password.!!!");
      return;
    }



    signUpUser(email, password)
      .then(result => {
        const newUser = result.user;
        updateUserNamePhoto({ displayName: name, photoURL: photo })
          .then(() => {
            const updatedUser = { ...newUser, displayName: name, photoURL: photo };
            setUser(updatedUser)
            navigate('/')
            toast.success("Successfully logged in.")
          }).catch(err => {
            console.log(err);
          })
      }).catch(err => {
        console.log(err.message);
        toast.error("This email already used.!!!")
      })

  }

  const handleSignUpWithGoogle = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
        toast.success("Successfully logged in.")
        navigate('/')
      }).catch(err => {
        console.log(err.message);
        // toast.error("")
      })

    }
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once
      })
    }, []);

  return (
    <div data-aos="fade-right" className="hero bg-base-200 mt-8 rounded-lg py-6">
      <div className="hero-content flex-col w-full md:w-9/12 lg:w-1/2">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Sign up now!</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">

          <div className='px-8 pt-8'>
            <button onClick={handleSignUpWithGoogle} className="btn btn-outline w-full hover:text-primary hover:bg-third"><span><FaGoogle></FaGoogle></span> Sign up with Google</button>
            <div className="divider">or</div>
          </div>

          <form onSubmit={handleSignup} className="card-body pt-0">

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

      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp | Pathfinder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default SignUp;