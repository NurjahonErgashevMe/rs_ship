import React from "react";
import classes from "./styles.module.scss";
import { termsData } from "../../constants/terms";

function Terms() {
  return (
    <div className="container pt-50 pb-50">
      {termsData.map((item, index) => (
        <div key={index} className={classes.condition}>
          <span className={classes.index}>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}.
          </span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Terms;
