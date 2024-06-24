import React from "react";
import PhotoGrid from "./PhotoGrid";
import ProcessItem from "./ProcessItem";
import processItemData from "./processItemData";

import ShipImage1 from "../../assets/img/ship/ship1.jpg";
import ShipImage2 from "../../assets/img/ship/ship2.jpg";
import ShipImage3 from "../../assets/img/ship/sea_transportation.jpg";

function Process() {
  return (
    <section className="process-wrapper section-padding section-bg">
      <div className="container">
        <div className="row align-center">
          <PhotoGrid img1={ShipImage1} img2={ShipImage2} img3={ShipImage3} />
          <div className="col-xl-6 col-12 offset-xl-1">
            <div className="section-title">
              <span>process</span>
              <p>process</p>
              <h1>Our Company Work Process.</h1>
            </div>

            <div className="process-setps mt-5 mt-xl-0">
              {processItemData.map((data) => (
                <ProcessItem
                  key={data.key}
                  number={data.number}
                  heading={data.heading}
                  text={data.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
