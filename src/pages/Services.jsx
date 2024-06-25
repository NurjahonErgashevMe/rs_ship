import React from "react";
import bannerBg from "../assets/img/ship/vehicle_transportation.jpg";
import PageBanner from "../components/PageBanner";
import Process from "../components/Process";
// import ProjectFilter2 from '../components/ProjectFilter2';
import Services2 from "../components/Services2";
import SEO from "../components/SEO";

function Services() {
  return (
    <>
      <SEO title="Services" />
      <PageBanner
        bannerBg={bannerBg}
        currentPage="Services"
        heading="What We Do"
      />
      <Services2 />
      <Process />
    </>
  );
}

export default Services;
