import React from "react";
import Analytics from "../components/Analytics";
// import Blog1 from '../components/Blog1';
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
// import Portfolio1 from '../components/Portfolio1';
// import Pricing from '../components/Pricing';
import Promo from "../components/Promo";
import Services1 from "../components/Services1";
// import Subscribe from '../components/Subscribe';

function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <Services1 />
      <Cta />
      <Faq />
      {/* <Portfolio1 />
            <Pricing /> */}
      <Analytics />
      {/* <Subscribe /> */}
      {/* <Blog1 /> */}
    </>
  );
}

export default Home;
