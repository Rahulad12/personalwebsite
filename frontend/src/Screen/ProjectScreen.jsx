import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Project from "../Component/Project";
import Loader from "../Component/Loader";
import { useGetProjectQuery } from "../slices/systemApiSlices";

const ProjectScreen = () => {
  const [projects, setProjects] = useState([]);
  const [Feedback, setFeedback] = useState("");
  const [FeedbackType, setFeedbackType] = useState("");

  const { data, error, isLoading } = useGetProjectQuery();
  document.title = "Projects | Portfolio";

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
    if (error) {
      const errormessage = error.message || "Error fetching projects.";
      setFeedback(errormessage);
      setFeedbackType("danger");
    }
  }, [data, error]);
  return (
    <>
      <Container className="project-container">
        {Feedback && (
          <Alert variant={FeedbackType} className="my-2" dismissible>
            {Feedback}
          </Alert>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <Row className="card_element_space">
            {projects.map((p) => {
              return (
                <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                  <Project projects={p} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProjectScreen;
