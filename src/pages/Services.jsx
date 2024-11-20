import React, { useContext, useEffect, useState } from 'react';
import ServiceCart from '../components/serviceCart';
import { DataContext } from '../provider/DataProvider';
import ServicesBanner from '../components/ServicesBanner';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const { services, setServices } = useContext(DataContext);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);

    // console.log(services);

    return (
        <div className=''>
            <div data-aos="fade-down">
                <ServicesBanner></ServicesBanner>
            </div>

            <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    services?.map(service => <ServiceCart key={service.serviceId} service={service}></ServiceCart>)
                }
            </div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Services | Pathfinder</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Services;