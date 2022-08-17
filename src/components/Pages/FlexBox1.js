import React from "react";
import "../../styles/flexbox1.scss";
import { flexInfo1 } from "../../userdata";

export const FlexBox1 = () => {
  const flexData1 = flexInfo1.map((props) => {
    return <Flex1 {...props} />;
  });
  return <div className="flex_main">{flexData1}</div>;
};

const Flex1 = (props) => {
  return (
    <>
      <div className="flex1_main">
        <div className="flex_img">
          <img src={props.image} alt="screenpix" />
        </div>

        <div className="header_text">
          <p>{props.header_text}</p>
        </div>

        <div className="quote_sec">
          <p>"{props.quote}"</p>
        </div>

        <div className="radio_sec">
          <input type="radio" checked name="radio1" className="radio1 acive" />
          <input type="radio" name="radio1" className="radio1" />
          <input type="radio" name="radio1" className="radio1" />
        </div>

        <div className="skip_next">
          <p>{props.skip}</p>
          <p>{props.next}</p>
        </div>
      </div>
    </>
  );
};
