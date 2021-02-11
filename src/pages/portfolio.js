import React, {useEffect, Fragment } from 'react';

import HeaderTwo from '../components/header-2';
import PortfolioSection from '../components/portfolio-section';
import Footer from '../components/footer';



const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    return (
        <Fragment>
            <HeaderTwo />
            <PortfolioSection />
            
            <Footer />
        </Fragment>
    )
}

export default Portfolio;
