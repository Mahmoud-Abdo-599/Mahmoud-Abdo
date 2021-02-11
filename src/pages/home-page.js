import React, {useEffect, Fragment } from 'react';

import Header from '../components/header';
import HomePageSectionOne from '../components/home-page-section-1';
import HomePageSectionTwo from '../components/home-page-section-2';
import HomePageSectionThree from '../components/home-page-section-3';
import HomePageSectionFour from '../components/home-page-section-4'
import Footer from '../components/footer';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <Fragment>
            <Header />
            <HomePageSectionOne />
            <HomePageSectionTwo />
            <HomePageSectionThree />
            <HomePageSectionFour />
            <Footer />
        </Fragment>
    )
}

export default Home;
