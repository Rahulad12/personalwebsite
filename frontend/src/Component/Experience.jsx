import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";
import { useGetExperienceQuery } from "../slices/systemApiSlices";

const Experience = () => {
  const [Feedback, setFeedback] = useState("");
  const [FeedbackType, setFeedbackType] = useState("");

  const { data: experience, error, isLoading } = useGetExperienceQuery();

  return (
    experience && (
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          (setFeedback(error), setFeedbackType("danger"))
        ) : (
          <Container className="d-flex">
            {Feedback && (
              <Alert
                variant={FeedbackType}
                className="my-2"
                dismissible
                onClose={() => setFeedback(" ")}
              >
                {Feedback}
              </Alert>
            )}

            {experience.map((exp) => (
              <Row key={exp._id}>
                <Col md={9}>
                  <ul className="d-flex justify-content-center align-item-center flex-wrap ">
                    <li>
                      <h4>{exp.title}</h4>
                      <h5>{exp.company}</h5>
                      <h6>{exp.location}</h6>
                      <p>{exp.role}</p>
                      <p>
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p>{exp.description}</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            ))}
          </Container>
        )}
      </div>
    )
  );
};

export default Experience;
