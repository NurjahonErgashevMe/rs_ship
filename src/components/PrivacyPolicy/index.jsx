import React from "react";
import { privacyData } from "../../constants/privacy";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../../constants";

function PrivacyPolicy() {
  return (
    <div className="container pt-50 pb-50">
      {privacyData.map((item, index) => (
        <div key={index} className="mt-30 mb-30">
          <h1 className="h1 mb-20 color-theme">{item.heading}</h1>
          {item.texts.map((text, textIndex) => (
            <p key={textIndex} className="mb-10">
              {text}
            </p>
          ))}
        </div>
      ))}
      <p className="mt-20">Refine Ship {ADDRESS}</p>
      <a href="https://refineship.com/" className="color-theme mt-20 d-block">
        https://refineship.com
      </a>
      <a
        href={`mailto:${EMAIL}`}
        target="_blank"
        className="color-theme mt-20 d-block"
      >
        {EMAIL}
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        target="_blank"
        className="color-theme mt-20 d-block"
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
}

export default PrivacyPolicy;
