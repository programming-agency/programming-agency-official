import React from 'react';
import SEO from '../common/seo';
import HomeTwo from '../components/homes/home-2';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
         <SEO pageTitle={"Programming Agency"} />
           <HomeTwo />
        </Wrapper>
    );
};

export default index;