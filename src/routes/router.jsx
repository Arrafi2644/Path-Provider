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

const router = createBrowserRouter([
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
                element : <ServiceDetails></ServiceDetails>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/counselorDetails/:id',
                element: <CounselorDetailsPage></CounselorDetailsPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);

export default router;