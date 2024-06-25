import React from "react";
import bannerBg from "../assets/img/ship/vehicle_transportation.jpg";
import PageBanner from "../components/PageBanner";
// import ProjectFilter2 from '../components/ProjectFilter2';
import SEO from "../components/SEO";

function NotFound() {
  return (
    <>
      <SEO title="404 (Not Found)" />
      <PageBanner
        bannerBg={bannerBg}
        currentPage="404"
        heading="PAGE NOT FOUND"
      />
    </>
  );
}

export default NotFound;
