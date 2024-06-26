import React from "react";
import classes from "./styles.module.scss";
import { termsData } from "../../constants/terms";
import clsx from "clsx";

function Terms() {
  return (
    <div className={clsx(classes.container , 'container' , 'pt-50 pb-50')}>
      <div className={classes.conditions}>
        {termsData.map((item, index) => (
          <div key={index} className={classes.condition}>
            <span className={classes.index}>
              {index + 1 < 10 ? `0${index + 1}` : index + 1}.
            </span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terms;
