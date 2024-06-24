import React from "react";
import ServicesTwoCard from "./SevicesTwoCard";
import { servicesData } from "../../constants/services";

function Services2() {
  return (
    <section className="our-service-wrapper section-padding mtm-30">
      <div className="container">
        <div className="row">
          {servicesData.map((data) => (
            <ServicesTwoCard
              key={data.id}
              thumbnail={data.bgImg}
              // icon={data.icon}
              heading={data.heading}
              text={data.text}
              id={data.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services2;
