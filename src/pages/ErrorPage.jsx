import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center'>404</h2>
            <h3 className='text-2xl font-semibold text-center'>Page not found</h3>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Error</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default ErrorPage;