import React from 'react';
import SEO from '../common/seo';
import HomeNine from '../components/homes/home-9';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Gencio - Architecture"} />
            <HomeNine />
        </Wrapper>
    );
};

export default index;