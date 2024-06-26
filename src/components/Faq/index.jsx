import React from "react";
import man1 from "../../assets/img/man1.png";
import bgImg from "../../assets/img/map_pattern.png";
import FaqAccordion from "../FaqAccordion";
import faqData from "../../constants/faq";

function Faq() {
  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="content-block">
              <p>FAQ</p>
              <h1>Get every single answers from here.</h1>
              <div className="bg-img">
                <img src={bgImg} alt="" />
                <div
                  className="man bg-cover man-1"
                  style={{
                    backgroundImage: `url(${man1})`,
                  }}
                />
                <div
                  className="man bg-cover man-2"
                  style={{
                    backgroundImage: `url(${man1})`,
                  }}
                />
                <div
                  className="man bg-cover man-3"
                  style={{
                    backgroundImage: `url(${man1})`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12 mt-4 mt-xl-0">
            <div className="faq-content">
              {faqData?.map((item) => (
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
  );
}

export default Faq;
