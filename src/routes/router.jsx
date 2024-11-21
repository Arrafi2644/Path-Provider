import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import CounselorDetailsPage from "../pages/CounselorDetailsPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import Contact from "../pages/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
             path: '/',
             element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/serviceDetails/:id',
                element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
               path: '/contact',
               element: <Contact></Contact>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/counselorDetails/:id',
                element: <PrivateRoute><CounselorDetailsPage></CounselorDetailsPage></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
            }
        ]
    },
]);

export default Router;