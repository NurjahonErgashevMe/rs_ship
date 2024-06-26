import React from "react";
import FaqAccordion from "../FaqAccordion";
import DetailsCarousel from "./DetailsCarousel";
import DetailsContent from "./DetailsContent";
import ProcessItem from "../Process/ProcessItem";

function ServiceDetails({ images, faq, content, service_opinion }) {
  return (
    <div className="service-details-content-wrapper pl-0 pl-md-4">
      <DetailsCarousel images={images} />
      <DetailsContent content={content} />

      {service_opinion?.length ? (
        <div className="service-opinion">
          <h2>Service opinions</h2>
          <div className="process-setps pt-0">
            {service_opinion?.map((item, index) => (
              <ProcessItem
                key={item.key}
                number={index + 1 < 10 ? `0${index + 1}` : index + 1}
                heading={item.text}
                text={item.description}
              />
            ))}
          </div>
        </div>
      ) : null}
      {faq?.length ? (
        <div className="faq-content pl-0 ">
          <h2>What Is Include?</h2>
          {faq?.map((item, index) => (
            <FaqAccordion
              key={index}
              question={item.heading}
              answer={item.text}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ServiceDetails;
