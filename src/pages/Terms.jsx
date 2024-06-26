import React from "react";
import bannerBg from "../assets/img/ship/vehicle_transportation.jpg";
import PageBanner from "../components/PageBanner";
import SEO from "../components/SEO";
import Terms from "../components/Terms";

function TermsPage() {
  return (
    <>
      <SEO title="Terms and conditions" />
      <PageBanner
        bannerBg={bannerBg}
        currentPage="terms and conditions"
        heading="terms and conditions"
      />
      <Terms />
    </>
  );
}

export default TermsPage;
