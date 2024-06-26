import React from "react";
import bannerBg from "../assets/img/ship/vehicle_transportation.jpg";
// import ContactForm from "../components/ContactForm";
import FaqAccordion from "../components/FaqAccordion";
import PageBanner from "../components/PageBanner";
import SEO from "../components/SEO";
import faqData from "../constants/faq";

function Faq() {
  const middle = faqData.length / 2;
  return (
    <>
      <SEO title="FAQ" />
      <PageBanner bannerBg={bannerBg} heading="Get Answers" currentPage="Faq" />
      <section className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp">
              <div className="faq-content">
                {faqData.slice(0, middle)?.map((item) => (
                  <FaqAccordion
                    question={item.question}
                    answer={item.answer}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp">
              <div className="faq-content">
                {faqData.slice(middle)?.map((item) => (
                  <FaqAccordion
                    question={item.question}
                    answer={item.answer}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ContactForm title="Get Quote" heading="Get More Answers" /> */}
    </>
  );
}

export default Faq;
