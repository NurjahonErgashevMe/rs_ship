import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeroBg1 from "../../assets/img/hero1.jpg";
import HeroVideo1 from "../../assets/videos/heros/hero1_video.mp4";
import HeroForm from "../HeroForm";

function Hero() {
  return (
    <section className="hero-slide-wrapper hero-1">
      <div className="hero-slider-active owl-carousel">
        <div className="single-slide bg-cover">
          <video
            poster={HeroBg1}
            src={HeroVideo1}
            muted
            autoPlay
            loop
            alt="Banner"
            aria-hidden="true"
            className="hero-image"
          />
          <div className="container">
            <div className="row wrapper mx-auto">
              <div className="col-12 col-lg-7 col-xl-6 m-0 px-0 ">
                <div className="hero-contents">
                  <h1>Refine ship</h1>
                  <div className="links">
                    <Link to="/services" className="theme-btn">
                      Our Services{" "}
                      <BsArrowRight style={{ marginLeft: "10px" }} />
                    </Link>
                    <Link to="/about" className="theme-btn black">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xl-6 hero-form ">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
        {/* <SwiperSlide>
          <div
            className="single-slide bg-cover"
            style={{ backgroundImage: `url(${HeroBg1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-6">
                  <div className="hero-contents">
                    <h1>Global Automotive</h1>
                    <a href="services.html" className="theme-btn">
                      Our Services <i className="fal fa-long-arrow-right" />
                    </a>
                    <a href="about.html" className="theme-btn black">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </div>
    </section>
  );
}

export default Hero;
