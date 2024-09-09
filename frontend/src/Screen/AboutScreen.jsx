import React from "react";
import { Container } from "react-bootstrap";
import About from "../Component/About";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../customcss/about.css";
const AboutScreen = () => {
  document.title = "About | Portfolio";

  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/contact");
  };
  return (
    <div>
      <Container className="about-container">
        <About />
        <Button variant="outline-dark" className="fs-4" onClick={submitHandler}>
          Message Me!
        </Button>
      </Container>
    </div>
  );
};

export default AboutScreen;
