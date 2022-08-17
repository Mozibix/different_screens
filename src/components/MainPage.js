import React from "react";
import "../styles/mainpage.scss";
import "../styles/flexgeneralstyles.scss";
import { FlexBox1 } from "./Pages/FlexBox1";
import { FlexBox2 } from "./Pages/FlexBox2";
import { FlexBox3 } from "./Pages/FlexBox3";

export const MainPage = () => {
  return (
    <>
      <div className="main_sec">
        <div className="main_sec_inner">
          <FlexBox1 />
          <FlexBox2 />
          <FlexBox3 />
        </div>
      </div>
    </>
  );
};
