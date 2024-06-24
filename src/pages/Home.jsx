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
import { SuperSEO } from "react-super-seo";
// import Subscribe from '../components/Subscribe';

function Home() {
  return (
    <>
      <SuperSEO
        title="Home | React Super SEO"
        description="React SEO component with OpenGraph and Twitter Cards support."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "http://placekitten.com/1200/630",
            ogImageAlt: "Kittens",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: "http://placekitten.com/1200/630",
            summaryCardImageAlt: "Kittens",
            summaryCardSiteUsername: "justinmahar",
          },
        }}
      />
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
