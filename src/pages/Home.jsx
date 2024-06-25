import React from "react";
import Analytics from "../components/Analytics";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import Services1 from "../components/Services1";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO title="Auto Shipping & Auto Carrier Services in the USA" />
      <Hero />
      <Promo />
      <Services1 />
      <Cta />
      <Faq />
      <Analytics />
    </>
  );
}

export default Home;
