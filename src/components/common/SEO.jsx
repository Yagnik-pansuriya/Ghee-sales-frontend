import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} | Ghee & Honey</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

export default SEO;
