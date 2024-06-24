import React from 'react';
import AboutFeatured from '../components/AboutFeatured';
import Footer from '../components/Footer3';
import Header1 from '../components/Header1';
// import SkillSet from '../components/SkillSet';
import Sponsors from '../components/Sponsors';
import Timeline from '../components/Timeline';
import PageBannerVideo from '../components/PageBannerVideo';

import TeamImage from '../assets/img/team_banner.jpeg'
import TeamVideo from '../assets/videos/banner/team.mp4'

function About() {
    return (
        <>
            <Header1 />
            <PageBannerVideo poster={TeamImage} videoSrc={TeamVideo} currentPage="About Us" heading="About Us" />
            <AboutFeatured />
            {/* <Approch /> */}
            {/* <SkillSet /> */}
            <Sponsors />
            <Timeline />
            <Footer />
        </>
    );
}

export default About;
