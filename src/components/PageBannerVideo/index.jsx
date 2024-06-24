import React from "react";
import { Link } from "react-router-dom";

function PageBannerVideo({ poster, currentPage, heading, videoSrc }) {
  return (
    <section className="page-banner-wrap  bg-cover">
      <video
        poster={poster}
        src={videoSrc}
        muted
        autoPlay
        loop
        alt="Banner"
        aria-hidden="true"
        className="hero-image"
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="breadcrumb-wrap">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {currentPage}
                  </li>
                </ol>
              </nav>
            </div>

            <div className="page-heading text-white">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBannerVideo;
