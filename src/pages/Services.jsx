import React from 'react';
import bannerBg from '../assets/img/ship/vehicle_transportation.jpg';
import Footer from '../components/Footer3';
import Header from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
// import ProjectFilter2 from '../components/ProjectFilter2';
import Services2 from '../components/Services2';

function Services() {
    return (
        <>
            <Header />
            <PageBanner bannerBg={bannerBg} currentPage="Services" heading="What We Do" />
            <Services2 />
            <Process />
            {/* <ProjectFilter2 /> */}
            <Footer />
        </>
    );
}

export default Services;
