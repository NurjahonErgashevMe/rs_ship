import React from "react";
import CountUp from "react-countup";

function TimelineItem({ year, heading, transform }) {
  return (
    <div className={`single-time-line ${transform}`}>
      <CountUp
        start={0}
        end={year}
        duration={5}
        decimal="."
        suffix="+"
        delay={0}
        separator=" "
      >
        {({ countUpRef }) => <h2 className="h2" ref={countUpRef} />}
      </CountUp>
      {/* <div className="icon">{icon}</div> */}
      <div className="content pt-3">
        <h4>{heading}</h4>
        {/* <p>{text}</p> */}
      </div>
    </div>
  );
}

export default TimelineItem;
