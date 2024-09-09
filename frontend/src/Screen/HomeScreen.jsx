import React from "react";
import { Container } from "react-bootstrap";
import Coverpage from "../Component/Coverpage";

import About from "../Component/About";
import Skill from "../Component/Skill";
import Experience from "../Component/Experience";
// import Testimonials from "../Component/Testimonials";
const HomeScreen = () => {
  document.title = "Home | Portfolio";
  return (
    <div>
      <Coverpage />
      <Container>
        <div className="about_section">
          <h2 className="my-4">
            <strong>About Me</strong>
          </h2>
          <About />
        </div>
        <div className="Skill_sections">
          <h2 className="my-4">
            <strong>Skills</strong>
          </h2>
          <Skill />
        </div>
        <div className="Experience_sections">
          <h2 className="my-4">
            <strong>Experience</strong>
          </h2>
          <Experience />
        </div>
      </Container>
    </div>
  );
};

export default HomeScreen;
