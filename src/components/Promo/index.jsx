import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProcessGrid2 from "../Process2/ProcessGrid2";
import ShipImg1 from "../../assets/img/ship/ship1.jpg";
import ShipImg2 from "../../assets/img/ship/ship2.jpg";
import ShipImg3 from "../../assets/img/ship/ship3.jpg";

function Promo() {
  return (
    <section className="promo-featured-wrapper section-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-6 col-12 text-center">
            <ProcessGrid2 img1={ShipImg3} img2={ShipImg1} img3={ShipImg2} />
          </div>
          <div className="col-xl-6 col-12">
            <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
              <span>Easy transportation of goods</span>
              <h1>Ship with us!</h1>
              <h4>Refine Ship: Delivering Excellence on Every Truckload</h4>
              <p>
                Transport your goods easily and reliably with us! We ensure fast
                and secure delivery, offering tailored solutions for any
                business. Trust the professionals and enjoy peace of mind,
                knowing your goods are in safe hands. Choose us for flawless
                logistics!
              </p>
              <Link to="/contact" className="theme-btn">
                Get In Touch
                <BsArrowRight
                  style={{ fontSize: "20px", marginLeft: "15px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
