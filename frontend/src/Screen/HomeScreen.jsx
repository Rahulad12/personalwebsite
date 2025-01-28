import React from "react";
import { Container } from "react-bootstrap";
import Coverpage from "../Component/Coverpage";
import About from "../Component/About";
import Skill from "../Component/Skill";
import Experience from "../Component/Experience";
import Project from "../Component/Project";
import "../customcss/homescreen.css"; // Import the custom CSS
import { useGetProjectQuery } from "../slices/systemApiSlices";

const HomeScreen = () => {
  document.title = "Home | Portfolio";

  const { data: project, isLoading, error } = useGetProjectQuery();
  console.log("all project", project);
  const sortedProjectsbyDate = project
    ? [...project].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    : [];
  console.log("sorted project", sortedProjectsbyDate);
  return (
    <div>
      <Coverpage />
      <Container>
        {/* About Section */}
        <div className="about_section section-wrapper">
          <h2 className="section-title">
            <strong>About Me</strong>
          </h2>
          <About />
        </div>

        {/* Skills Section */}
        <div className="skill_section section-wrapper">
          <h2 className="section-title">
            <strong>Skills</strong>
          </h2>
          <Skill />
        </div>
        {/*projects section */}
        <div className="project_section section-wrapper">
          <h2 className="section-title">
            <strong>Projects</strong>
          </h2>
          <div className="d-flex justify-content-between">
            {sortedProjectsbyDate?.map((projects, key) => (
              <Project projects={projects} key={key} />
            ))}
          </div>
        </div>

        {/* Service Section */}
        <div className="service_section section-wrapper">
          <h2 className="section-title">
            <strong>Services</strong>
          </h2>
          <div className="d-flex justify-content-between">
            <div className="service-info service-card">
              <h3>Service I Offer</h3>
              <p>Web Development</p>
            </div>

            <div className="stack-info service-card">
              <h3>Stack I Use</h3>
              <ul className="list-unstyled">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL / NoSQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience_section section-wrapper">
          <h2 className="section-title">
            <strong>Experience</strong>
          </h2>
          <Experience />
        </div>
      </Container>
    </div>
  );
};

export default HomeScreen;
