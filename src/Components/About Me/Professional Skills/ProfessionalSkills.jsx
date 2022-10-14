import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { BarDiv, SkillParentDiv } from "./ProfessionalSkills.styled";

// -----------Percentage bar component----------------------
const Bar = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BarDiv percentage={props.percentage}>
      <p>{props.info}</p>
      <div>
        <span />
      </div>
    </BarDiv>
  );
};

const ProfessionalSkills = () => {
  return (
    <SkillParentDiv data-aos="fade-left" data-aos-duration="1000">
      <Bar info={"react js"} percentage={"60%"} />
      <Bar info={"javascript"} percentage={"70%"} />
      <Bar info={"html 5"} percentage={"90%"} />
      <Bar info={"css 3"} percentage={"85%"} />
    </SkillParentDiv>
  );
};

export default ProfessionalSkills;
