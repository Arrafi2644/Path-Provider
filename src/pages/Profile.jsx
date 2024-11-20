import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import ProfileBanner from '../components/ProfileBanner';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext)

    // console.log(user.displayName);
    const handleUpdateProfile = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')

        console.log(name, photo);

        updateProfile(auth.currentUser, {displayName:name, photoURL:photo})
        .then(()=>{
          const newUserInfo = {...user, displayName:name, photoURL:photo }
          setUser(newUserInfo)
        }).catch(err => {
            console.log(err.message);
        })

    }
    return (
        <div>
            <ProfileBanner></ProfileBanner>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* user info */}
                <div className='border rounded-lg p-6'>
                    <img className='w-32 h-32 object-cover rounded-full mb-4' src={user?.photoURL} alt="" />
                    <h3 className='text-xl font-bold'>{user?.displayName}</h3>
                    <p className='font-medium'>Email: {user?.email}</p>
                </div>
                {/* update profile  */}
                <div className='border rounded-lg p-6'>
                    <h3 className='text-xl font-bold'>Update Your Profile</h3>
                    <form onSubmit={handleUpdateProfile} className="card-body p-0 mt-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-third text-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>




            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile | Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Profile;