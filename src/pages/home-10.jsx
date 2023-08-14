import React from 'react';
import SEO from '../common/seo';
import HomeTen from '../components/homes/home-10';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Programming Agency  -  Digital Marketing"} />
            <HomeTen />
        </Wrapper>
    );
};

export default index;