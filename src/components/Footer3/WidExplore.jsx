import React from "react";
import { Link } from "react-router-dom";

function WidExplore() {
  return (
    <div className="single-footer-wid">
      <div className="wid-title">
        <h4>Explore Other Pages</h4>
      </div>
      <div className="splite-menu d-flex justify-content-between">
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">Who we are</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <Link to="/faq">F.A.Q.</Link>
          </li>
          
          {/* <li>
                        <Link to="/team">Our Team</Link>
                    </li> */}
          {/* <li>
                        <Link to="/about">Approach</Link>
                    </li> */}
          {/* <li>
                        <Link to="/projects">Case Studies</Link>
                    </li> */}
        </ul>
        <ul>
          <li>
            <Link to="/privacy">Privacy and policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms and conditions</Link>
          </li>
          <li>
            <Link to="/contact">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WidExplore;
