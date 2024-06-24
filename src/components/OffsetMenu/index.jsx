import React, { useRef } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
  //   FaClock,
  //   FaDribbble,
  //   FaFacebookF,
  //   FaLinkedinIn,
  FaMap,
  FaPlus,
  //   FaTwitter,
  //   FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../../constants";

import { useClickOutside } from "@react-hooks-hub/use-click-outside";

function OffsetMenu({ className, handleOffset, offset }) {
  const ref = useRef();
  useClickOutside([ref], (isOutside) => {
    if (isOutside && offset) {
      handleOffset(false);
    }
  });

  return (
    <div className={className} ref={ref}>
      <span id="offset-menu-close-btn">
        <FaPlus onClick={() => handleOffset(false)} />
      </span>
      <div className="offset-menu-wrapper text-white">
        <div className="offset-menu-header">
          <div className="offset-menu-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="offset-menu-section">
          <h3>About Us</h3>
          <p>We are a top company providing logistics services</p>
          <Link to="/contact" className="theme-btn mt-30">
            Request a quote
          </Link>
        </div>
        <div className="offset-menu-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <span>
                <FaMap />
              </span>
              {ADDRESS}
            </li>
            <li>
              <span>
                <AiOutlinePhone />
              </span>
              {PHONE_NUMBER}
            </li>
            <li>
              <span>
                <AiOutlineMail />
              </span>
              {EMAIL}
            </li>
          </ul>
        </div>
        {/* <div className="offset-menu-footer">
          <div className="offset-menu-social-icon">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaDribbble />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default OffsetMenu;
