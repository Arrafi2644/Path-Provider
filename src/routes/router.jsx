import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";

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
            }
        ]
    },
]);

export default router;