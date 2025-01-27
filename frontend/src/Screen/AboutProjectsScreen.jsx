import React, { useState, useEffect } from "react";
import Loader from "../Component/Loader";
import { Container, Card, Alert, Button, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../slices/systemApiSlices";
import { FaGithub } from "react-icons/fa";
import "../customcss/AboutProjectsScreen.css"; // Assuming you add a CSS file here

const AboutProjectsScreen = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const { data: project, isLoading, error } = useGetProjectByIdQuery(id);

  useEffect(() => {
    if (project && project.title) {
      document.title = `${project.title} | Portfolio`;
    }
  }, [project]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "Not Specified";
    const dateObj = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dateObj.toLocaleDateString("en-US", options);
  };

  const projectStatus = project?.status ? "Completed" : "Inprogress";

  return (
    <div className="about-projects-screen">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert variant="danger" className="my-3">
          An error occurred while fetching the project. Please try again later.
        </Alert>
      ) : (
        <Container className="project-container">
          {feedback && (
            <Alert
              variant={feedbackType}
              dismissible
              onClose={() => setFeedback("")}
              className="my-2"
            >
              {feedback}
            </Alert>
          )}
          {project && (
            <Card className="project-card">
              <Card.Body>
                <Link
                  to={`/project/${project._id}`}
                  className="text-dark project-title"
                >
                  <Card.Title as="div">
                    <strong>{project.title}</strong>
                  </Card.Title>
                </Link>

                <Card.Text as="div" className="project-description">
                  {project.description || "No description available."}
                </Card.Text>

                <Row className="project-details">
                  <Col md={6}>
                    <Card.Text as="div">
                      <strong>Start Date: </strong>
                      {formatDate(project.startDate)}
                    </Card.Text>
                  </Col>
                  <Col md={6}>
                    <Card.Text as="div">
                      <strong>End Date: </strong>
                      {formatDate(project.endDate)}
                    </Card.Text>
                  </Col>
                </Row>

                <Row className="project-status-row">
                  <Col md={6}>
                    <Card.Text as="div">
                      <strong>Status: </strong>
                      <span
                        className={`status-badge ${projectStatus.toLowerCase()}`}
                      >
                        {projectStatus}
                      </span>
                    </Card.Text>
                  </Col>
                  <Col md={6} className="project-github">
                    {project.link && (
                      <Button variant="dark" className="my-2 github-button">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white github-link"
                        >
                          <FaGithub className="me-2" /> View on GitHub
                        </a>
                      </Button>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Container>
      )}
    </div>
  );
};

export default AboutProjectsScreen;
