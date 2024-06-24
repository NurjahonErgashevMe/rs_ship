import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function SevicesTwoCard({ thumbnail, heading, id }) {
  return (
    <Link className="col-md-6 col-xl-4 col-12" to={`/service/${id}`}>
      <div className="single-service-card">
        {/* <div className="card-thumb bg-cover" /> */}

        <div className="card-thumb bg-cover">
          <img src={thumbnail} alt={heading} className="thumbnail-image" />
        </div>
        <div className="content">
          {/* <div className="case-cat">
                        <Link to="/services-details">{icon}</Link>
                    </div> */}
          <h3>{heading}</h3>
          {/* <p>{text}</p> */}
          <button className="read-btn">
            Read More <BsArrowRight />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default SevicesTwoCard;
