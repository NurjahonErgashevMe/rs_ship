import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
// import aboutImg from "../../assets/img/about_us.jpg";
// import btnImg from "../../assets/img/skill_bg.jpg";
// import IconBox from "./IconBox";

import videoBg from "../../assets/img/ship/ship2.jpg";
import videoSrc from "../../assets/videos/showreel.mp4";

function AboutFeatured() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        // videoId="EZ9DrY43wtw"
        url={videoSrc}
        onClose={() => setOpen(false)}
      />
      <section className="about-featured-wrapper section-padding">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-xl-6 col-lg-5 col-12">
              <div
                className="about-promo bg-cover"
                style={{ backgroundImage: `url(${aboutImg})` }}
              >
                <div
                  className="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                  style={{ backgroundImage: `url(${btnImg})` }}
                >
                  <div className="video-play-btn">
                    <button
                      type="button"
                      className="modal-btn"
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-xl-6 mt-5 mt-xl-0 col-12">
              <div
                className="video_wrapper bg-cover d-flex align-center"
                style={{ backgroundImage: `url(${videoBg})` }}
              >
                <div className="video-play-btn">
                  <button
                    type="button"
                    className="play-video popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
              <div className="block-contents">
                <span>About us</span>
                <h1 className="h1">
                  Focuses. Goal. Experienced logistics team
                </h1>
                <h4>
                  Join the thousands of customer. dealers, auctions, and event
                  organizers who trust our service to move their vehicles.
                </h4>
                <p>
                  Refine Ship focuses on providing reliable transportation
                  services to any type of vehicle, cars, motorcycles, RVs,
                  trailers to any states inside the USA and other foreign
                  countries as well.
                </p>
                <p>
                  Our main goal is to provide quality service for our customers
                  with good customer service. We take care of the most cost
                  effective service as possible.
                </p>
                <p>
                  Our experienced logistics team are the ones who make the
                  difference. Each customer has a dedicated agent to handle
                  their vehicles. They understand your needs, and strive to
                  exceed your expectations.
                </p>
              </div>

              {/* <div className="icon-boxs ml-lg-5">
                <IconBox
                  icon={<FaHardHat />}
                  heading="Great Wall Support"
                  text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt"
                />
                <IconBox
                  icon={<FaRoad />}
                  heading="Creative Ideas"
                  text="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutFeatured;
