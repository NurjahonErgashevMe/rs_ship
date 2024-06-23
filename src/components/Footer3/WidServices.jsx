import React from "react";
import { Link } from "react-router-dom";
import servicesOneData from "../Services1/servicesOneData";

function WidServices() {
  return (
    <div className="single-footer-wid">
      <div className="wid-title">
        <Link className="h4" to="/services">Services</Link>
      </div>
      <ul>
        {servicesOneData.map((item) => (
          <li key={item.id}>
            <Link to={`/services/${item.id}`}>{item.heading}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidServices;
