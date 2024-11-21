import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ForgetPassword = () => {
    const {resetPassword, storedEmail} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(storedEmail);

    const handleResetPassword = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get('email')
        // console.log(email);

        resetPassword(email)
        .then(()=>{
            toast.success("Send password reset email. check your gmail.")
            window.location.href = "https://mail.google.com/mail/";
        }).catch(err => {
            toast.error(err.message)
        })

    }

    useEffect(()=>{
        AOS.init({

            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          })
    }, [])


    return (
        <div data-aos="fade-down" className='w-11/12 md:w-3/5 lg:h-1/2 border p-6 rounded-lg my-8 mx-auto flex flex-col gap-4' >

            <h2 className='font-bold text-2xl'>Forgot Password?</h2>
            <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
            <p>For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>

            <form onSubmit={handleResetPassword}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Email Address</span>
                    </label>
                    <input name='email' defaultValue={storedEmail} type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div>
                    <input type="submit" value="Send Reset Instruction" className="btn text-primary bg-third mt-3" />
                </div>
            </form>
            <p>Back to <Link to='/login' className='text-third font-medium underline'>Login</Link></p>


            <Helmet>
                <meta charSet="utf-8" />
                <title>Forgot Password?|Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default ForgetPassword;