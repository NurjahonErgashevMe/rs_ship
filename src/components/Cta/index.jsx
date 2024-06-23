import React from "react";
import BgImg from "../../assets/img/ship/ship1.jpg";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="cta-wrapper">
      <div className="container">
        <div
          className="cta-content bg-cover"
          style={{
            backgroundImage: `url(${BgImg})`,
          }}
        >
          <div className="row align-items-center">
            <div className="col-xl-7 pl-xl-3 col-12 text-center text-xl-left">
              <h1 className="cta-heading">Order service</h1>
            </div>
            <div className="col-xl-4 pl-xl-0 mt-4 mt-xl-0 col-12 text-center text-xl-left">
              <div className="contact-info w-100">
                <Link to="/about" className="theme-btn black w-100 text-center">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
