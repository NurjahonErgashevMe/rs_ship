import React from "react";
import { useParams } from "react-router-dom";

import PageBanner from "../components/PageBanner";
import ServiceDetails from "../components/ServiceDetails";
import ServiceSidebar from "../components/ServiceSidebar";

import { servicesData } from "../constants/services";

function ServicesDetails() {
  const { id } = useParams();

  const currentService = servicesData.find((i) => i.id === id);

  if (!currentService) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <>
      <PageBanner
        bannerBg={currentService.bgImg}
        heading={currentService?.heading}
        currentPage="About service"
      />
      <section className="service-details-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 mt-5 mt-md-0 col-12 order-2 order-md-1">
              <ServiceSidebar />
            </div>
            <div className="col-lg-9 col-md-8 col-12 order-1 order-md-2">
              <ServiceDetails
                content={currentService.details.content}
                images={currentService.details.images}
                service_opinion={currentService.details.service_opinion}
                faq={currentService.details.faq}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesDetails;
