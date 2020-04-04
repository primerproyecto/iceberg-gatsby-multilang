import React from 'react';

import useTranslations from '../components/useTranslations';

const Success = () => {
    const {
        contactForm_success
      } = useTranslations();

    return (
        <>
            <h1>{contactForm_success}</h1>
        </>
    )
};

export default Success;
