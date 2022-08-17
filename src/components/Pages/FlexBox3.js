import React from "react";
import "../../styles/flexbox3.scss";

import { flexInfo3 } from "../../userdata";

export const FlexBox3 = () => {
  const flexData3 = flexInfo3.map((props) => {
    return <Flex3 {...props} />;
  });
  return <div className="flex_main">{flexData3}</div>;
};

const Flex3 = (props) => {
  return (
    <>
      <div className="flex3_main">
        <div className="flex_img">
          <img src={props.image} alt="screenpix" />
        </div>

        <div className="header_text">
          <p>{props.header_text}</p>
        </div>

        <div className="quote_sec">
          <p>{props.quote}</p>
        </div>

        <div className="radio_sec">
          <input type="radio" name="radio3" className="radio3" />
          <input type="radio" name="radio3" className="radio3" />
          <input type="radio" checked name="radio3" className="radio3" />
        </div>

        <div className="button">
          <button className="button">{props.button}</button>
        </div>
      </div>
    </>
  );
};
