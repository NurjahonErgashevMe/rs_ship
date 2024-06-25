import React from "react";
import AboutFeatured from "../components/AboutFeatured";
// import SkillSet from '../components/SkillSet';
import Sponsors from "../components/Sponsors";
import Timeline from "../components/Timeline";
import PageBannerVideo from "../components/PageBannerVideo";

import TeamImage from "../assets/img/team_banner.jpeg";
import TeamVideo from "../assets/videos/banner/team.mp4";

import SEO from "../components/SEO";

function About() {
  return (
    <>
      <SEO title="About" />
      <PageBannerVideo
        poster={TeamImage}
        videoSrc={TeamVideo}
        currentPage="About Us"
        heading="About Us"
      />
      <AboutFeatured />
      <Sponsors />
      <Timeline />
    </>
  );
}

export default About;
