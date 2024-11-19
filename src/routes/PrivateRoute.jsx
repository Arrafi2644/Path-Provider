import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user, loading} = useContext(AuthContext)
const {pathname} = useLocation()
 console.log(pathname);
 if(loading){
    return <span className="loading loading-ring loading-lg absolute left-1/2 top-16 -translate-x-1/2"></span>
 }
if(user){
    return children;
}
 
    return (
        <div>
            <Navigate state={pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;