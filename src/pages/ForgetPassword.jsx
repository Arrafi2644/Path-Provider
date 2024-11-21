import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const {resetPassword, storedEmail} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(storedEmail);

    const handleResetPassword = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get('email')
        console.log(email);

        resetPassword(email)
        .then(()=>{
            toast.success("Send password reset email. check your gmail.")
            window.location.href = "https://mail.google.com/mail/";
        }).catch(err => {
            toast.error(err.message)
        })
    }


    return (
        <div className='w-11/12 md:w-3/5 lg:h-1/2 border p-6 rounded-lg my-8 mx-auto flex flex-col gap-4' >

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