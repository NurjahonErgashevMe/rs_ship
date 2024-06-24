import React, { Fragment } from "react";

function DetailsContent({ content }) {
  return (
    <>
      {content?.map((item, index) => (
        <Fragment key={index}>
          <h2>{item.heading}</h2>
          {/* <span>{item.text}</span> */}
          {item?.texts?.map((item, index) => (
            <p key={index} >{item}</p>
          ))}
        </Fragment>
      ))}

      {/* <blockquote>
        Refine Ship
      </blockquote> */}
    </>
  );
}

export default DetailsContent;
