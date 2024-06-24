import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";
import iconCall from "../../assets/img/icon/call-icon.png";
import iconMap from "../../assets/img/icon/map-icon.png";
// import logo from "../../assets/img/logo-3.png";
import WidExplore from "./WidExplore";
// import WidNewsletter from './WidNewsletter';
import WidQuestions from "./WidQuestions";
import WidServices from "./WidServices";
import { ADDRESS, ADDRESS_LINK, EMAIL, PHONE_NUMBER } from "../../constants";

function Footer3() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-3 footer-wrap">
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4 col-12 pr-90">
              <WidExplore />
            </div>
            <div className="col-md-6 col-xl-4 col-12 pr-xl-0">
              <WidServices />
            </div>
            <div className="col-md-6 col-xl-4 col-12 pl-xl-5">
              <div className="single-footer-wid ml-15 contact_widget_2">
                <div className="wid-title">
                  <h4>Have any Question?</h4>
                </div>
                <div className="contact-us ">
                  <WidQuestions
                    icon={iconCall}
                    title="Phone"
                    text={PHONE_NUMBER}
                    href={`tel:${PHONE_NUMBER}`}
                  />
                  <WidQuestions
                    icon={iconMap}
                    title="Address"
                    text={ADDRESS}
                    href={ADDRESS_LINK}
                  />
                  <WidQuestions
                    href={`mailto:${EMAIL}`}
                    icon={iconCall}
                    title="Email"
                    text={EMAIL}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-xl-4 col-12  pl-xl-5">
                            <WidNewsletter />
                        </div> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 order-2 order-md-1">
              <div className="copyright-info mt-3 mt-md-0">
                <p>
                  Designed and developed by{" "}
                  <a target="_blank" href="https://sayt-xizmati.uz">
                    Soft System
                  </a>{" "}
                  - 2024
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 text-center order-1 order-md-2">
              This site and all content is copyright &copy; {currentYear} Refine Ship,
              Inc.
            </div>
            {/* <div className="col-md-4 col-12 text-md-end order-3 order-md-3">
              <div className="social_link  mt-3 mt-md-0">
                <Link to="/home-3">
                  <FaFacebookF />
                </Link>
                <Link to="/home-3">
                  <FaTwitter />
                </Link>
                <Link to="/home-3">
                  <FaInstagram />
                </Link>
                <Link to="/home-3">
                  <FaYoutube />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
