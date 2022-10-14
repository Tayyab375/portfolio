import React, { useEffect } from "react";

import { BannerParentDiv, ContentDiv } from "./Banner.styled";

const Banner = () => {
  useEffect(() => {
    typeWriter();
  });

  let i = 0;
  let name = "Muhammad Tayyab Nawaz";
  let speed = 60; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < name.length) {
      document.getElementById("name").innerHTML += name.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <BannerParentDiv>
      <ContentDiv>
        <h1>Hello!</h1>
        <h2 id="name">
          <span>I'm</span>{" "}
        </h2>
        <p>React JS Developer</p>
      </ContentDiv>
    </BannerParentDiv>
  );
};

export default Banner;
