import React from 'react';
import { Helmet } from 'react-helmet';

const Profile = () => {
    return (
        <div>
            Profile page


            <Helmet>
        <meta charSet="utf-8" />
        <title>Profile | Pathfinder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        </div>
    );
};

export default Profile;