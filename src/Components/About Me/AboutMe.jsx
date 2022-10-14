import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  AboutParentDiv,
  BorderDiv,
  ContentDiv,
  Headingh1,
  ImgDiv,
} from "./AboutMe.styled";

import img from "./Assets/Image/myimg.jpg";
import ProfessionalSkills from "./Professional Skills/ProfessionalSkills";

const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <AboutParentDiv id="about">
        <ImgDiv data-aos="fade-right" data-aos-duration="1000">
          <img src={img} alt="" />
          <BorderDiv />
        </ImgDiv>

        <ContentDiv data-aos="fade-left" data-aos-duration="1000">
          <h1>ABOUT ME</h1>
          <p>
            Hello! I'm Muhammad Tayyab Nawaz, , recently graduated from Sargodha
            University, Sargodha. I am a React JS Developer. My area of
            expertise are in React JS web development. I am a fast learner, a
            well organized and dedicated developer who is always motivated to
            develop his skills and grow professionally. I am confident in my
            ability to come up with quick and efficient solutions to problems.
          </p>

          <p>
            <span>Name:</span> Muhammad Tayyab Nawaz
          </p>
          <p>
            <span>date of birth:</span> 27 January 2000
          </p>
          <p>
            <span>nationality:</span> Citizen of Pakistan
          </p>
          <p>
            <span>phone:</span> +92 309 9937564
          </p>
          <p>
            <span>e-mail:</span> muhammadtayyabnawaz123@gmail.com
          </p>
          <p>
            <span>linkedin:</span>{" "}
            <a
              href="https://www.linkedin.com/in/muhammad-tayyab-nawaz-94173724b/"
              target={"_blank"}
              rel="noreferrer"
            >
              https://www.linkedin.com/in/muhammad-tayyab-nawaz-94173724b/
            </a>
          </p>
        </ContentDiv>
      </AboutParentDiv>

      <Headingh1 data-aos="fade-right" data-aos-duration="1000">
        professional skills
      </Headingh1>

      <ProfessionalSkills />
    </>
  );
};

export default AboutMe;
