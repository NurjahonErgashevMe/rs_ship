import React from "react";

function PhotoGrid({ img1, img2, img3 }) {
  return (
    <div className="col-xl-5 col-12">
      <div className="photo-style-grid">
        <div
          className="top-img bg-cover"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        />
        <div
          className="main-img bg-cover"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        />
        <div
          className="bottom-img bg-cover"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        />
      </div>
    </div>
  );
}

export default PhotoGrid;
