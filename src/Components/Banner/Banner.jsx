import React from "react";

import { BannerParentDiv, ContentDiv } from "./Banner.styled";

const Banner = () => {
  return (
    <BannerParentDiv>
      <ContentDiv>
        <h1>Hello!</h1>
        <h2>
          <span>I'm</span> Muhammad Tayyab Nawaz
        </h2>
        <p>React JS Developer</p>
      </ContentDiv>
    </BannerParentDiv>
  );
};

export default Banner;
