import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <p className="text-justify fs-5 mb-4">
              Hello! I'm <strong>Rahul Adhikari</strong>, a passionate computer
              science student currently pursuing my Bachelor's degree in
              Computer Science and Information Technology at Academia
              International College. My journey in the tech world has been both
              exciting and rewarding, equipping me with a diverse set of skills
              ranging from web development to data science.
            </p>
            <p className="text-justify fs-5 mb-4">
              Over the years, I've successfully completed various projects that
              reflect my commitment to the field. Notably, I developed
              <strong> LOKsha</strong>, an e-commerce website, and{" "}
              <strong>Matpatra</strong>, an e-governance voting platform, both
              utilizing the MERN Stack. My front-end development experience
              includes contributions to the <strong>Nejra EMR</strong> record
              system and <strong>Shop.Nep</strong>, another e-commerce platform.
            <Link to="/about" className="nav-link text-primary"> See more...</Link>
            </p>
            {/* <p className="text-justify fs-5 mb-4">
              My technical skills include proficiency in HTML, CSS, JavaScript,
              React, and the MERN Stack. I've also honed my data science skills
              with tools like NumPy, Matplotlib, and pandas. In addition to my
              academic pursuits, I work part-time as a secondary-level computer
              teacher at Deepika School in Kathmandu, where I share my knowledge
              with the next generation of tech enthusiasts.
            </p>
            <p className="text-justify fs-5 mb-4">
              My dedication and hard work have been recognized with an award for
              achieving the highest average in computer science among FISM
              member schools. I'm also an active member of the tech community,
              having volunteered for <strong>Nepal Debate</strong> and
              participated in a data hackathon organized by{" "}
              <strong>Code for Nepal</strong>.
            </p>
            <p className="text-justify fs-5 mb-4">
              I'm continually expanding my knowledge and skills, with a strong
              desire to make a significant impact in the world of technology.
              Feel free to explore my work and contributions on my{" "}
              <a
                href="https://github.com/Rahulad12"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile
              </a>
              .
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
