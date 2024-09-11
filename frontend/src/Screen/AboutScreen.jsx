import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../customcss/about.css";

const AboutScreen = () => {
  document.title = "About | Portfolio";

  const navigate = useNavigate();
  const handleContactNavigation = () => {
    navigate("/contact");
  };

  return (
    <div>
      <Container className="about-container">
        <Row className="align-items-center">
          <Col md={12}>
            <p className="text-justify fs-5 mb-4">
              Hi, I'm <strong>Rahul Adhikari</strong>, a passionate student of computer science, currently pursuing my Bachelor's degree. I've had the opportunity to immerse myself in various areas of tech, developing skills in both web development and data science.
            </p>
            <p className="text-justify fs-5 mb-4">
              Throughout my journey, I've successfully completed several projects, including <strong>LOKsha</strong>, an e-commerce platform, and <strong>Matpatra</strong>, an e-governance voting solution, both powered by the MERN Stack. My front-end expertise has also been applied to the <strong>Nejra EMR</strong> system and <strong>Shop.Nep</strong>, another e-commerce project.
            </p>
            <p className="text-justify fs-5 mb-4">
              My technical proficiency includes HTML, CSS, JavaScript, React, and the MERN Stack, alongside data science skills using tools like NumPy, Matplotlib, and pandas. Alongside my studies, I work as a part-time computer teacher at Deepika School, Kathmandu, sharing my knowledge with budding tech enthusiasts.
            </p>
            <p className="text-justify fs-5 mb-4">
              My efforts have been acknowledged with an award for having the highest average in computer science among FISM member schools. I've actively contributed to the tech community by volunteering for <strong>Nepal Debate</strong> and participating in a data hackathon organized by <strong>Code for Nepal</strong>.
            </p>
            <p className="text-justify fs-5 mb-4">
              I'm constantly striving to grow and make an impact in the tech world. Feel free to check out my work on my{" "}
              <a
                href="https://github.com/Rahulad12"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile
              </a>.
            </p>
          </Col>
        </Row>

        <Button variant="outline-dark" className="fs-4" onClick={handleContactNavigation}>
          Message Me!
        </Button>
      </Container>
    </div>
  );
};

export default AboutScreen;
