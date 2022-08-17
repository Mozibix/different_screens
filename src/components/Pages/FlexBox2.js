import React from "react";
import "../../styles/flexbox2.scss";
import { flexInfo2 } from "../../userdata";

export const FlexBox2 = () => {
  const flexData2 = flexInfo2.map((props) => {
    return <Flex2 {...props} />;
  });
  return <div className="flex_main">{flexData2}</div>;
};

const Flex2 = (props) => {
  return (
    <>
      <div className="flex2_main">
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
          <input type="radio" name="radio2" className="radio2" />
          <input type="radio" checked name="radio2" className="radio2" />
          <input type="radio" name="radio2" className="radio2" />
        </div>

        <div className="skip_next">
          <p>{props.skip}</p>
          <p>{props.next}</p>
        </div>
      </div>
    </>
  );
};
