import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Skill = () => {
  const skills = [
    "SQL",
    "Python",
    "React",
    "Git",
    "Git Hub",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Pandas",
    "Matplotlib",
    "Numpy",
  ];

  const makeCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            {skills &&
              skills.slice(0, 6).map((skill, index) => (
                <strong>
                  <li key={index}>{skill} </li>
                </strong>
              ))}
          </Col>
          <Col md="6">
            {skills &&
              skills.slice(6, 12).map((skill, index) => (
                <strong>
                  <li key={index}>{skill}</li>
                </strong>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
