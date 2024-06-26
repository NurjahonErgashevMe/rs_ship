import React from "react";
import classes from "./styles.module.scss";
import { termsData } from "../../constants/terms";
import clsx from "clsx";

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
      <div className={clsx(classes.condition, "mt-20")}>
        RS Logistics U.S. Department of Transportation Broker’s license #
        1412749. This supersedes all prior written or oral representation of RS
        Logistics and constitutes the entire agreement between Shipper and RS
        Logistics and may not be changed except in writing signed by an officer
        of RS Logistics. RS Logistics has the authorization to cancel the order
        at any time.
      </div>
    </div>
  );
}

export default Terms;
