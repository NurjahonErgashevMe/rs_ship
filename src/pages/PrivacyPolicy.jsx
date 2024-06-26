import React from "react";
import bannerBg from "../assets/img/ship/vehicle_transportation.jpg";
import PageBanner from "../components/PageBanner";
import SEO from "../components/SEO";
import PrivacyPolicy from "../components/PrivacyPolicy";

function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy & Policy" />
      <PageBanner
        bannerBg={bannerBg}
        currentPage="Privacy and policy"
        heading="Privacy & Policy"
      />
      <PrivacyPolicy />
    </>
  );
}

export default PrivacyPolicyPage;
