import React from "react";
import bannerBg from "../assets/img/ship/ship2.jpg";
import ContactUs from "../components/ContactUs";
import PageBanner from "../components/PageBanner";
import SEO from "../components/SEO";

function Contact() {
  return (
    <>
      <SEO title="Get a Quote | Contacts" />
      <PageBanner
        bannerBg={bannerBg}
        heading="Contact Us"
        currentPage="Contact"
      />
      <ContactUs />
      {/* <ContactForm title="Write Message" heading="Get In Touch" /> */}
    </>
  );
}

export default Contact;
