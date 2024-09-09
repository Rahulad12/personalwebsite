import React, { useState, useEffect } from "react";
import Loader from "../Component/Loader";
import { Container, Card, Alert, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../slices/systemApiSlices";
import { FaGithub } from "react-icons/fa";

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
    const dateObj = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dateObj.toLocaleDateString("en-US", options);
  };

  const projectStatus = project?.status ? "Completed" : "In Progress";
  const projectEndDate = project?.endDate ? formatDate(project.endDate) : "Not Specified";

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          {setFeedback("An error occurred while fetching the project.")}
          {setFeedbackType("danger")}
        </>
      ) : (
        <Container className="card_container">
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
            <Card className="my-3 p-3 rounded card">
              <Card.Body>
                <Link
                  to={`/project/${project._id}`}
                  className="text-dark fs-4"
                  style={{ textDecoration: "none" }}
                >
                  <Card.Title as="div">
                    <strong>{project.title}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as="div">
                  <div className="my-3">{project.description}</div>
                </Card.Text>
                <Card.Text as="div">
                  <div className="my-3">
                    <strong>Start Date: </strong>
                    {formatDate(project.startDate)}
                  </div>
                </Card.Text>
                <Card.Text as="div">
                  <div className="my-3">
                    <strong>End Date: </strong>
                    {projectEndDate}
                  </div>
                </Card.Text>
                <Card.Text as="div">
                  <div className="my-3">
                    <strong>Status: </strong>
                    {projectStatus}
                  </div>
                </Card.Text>
                <Card.Text as="div">
                  <Button variant="dark" className="my-3">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <FaGithub />
                    </Link>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Container>
      )}
    </div>
  );
};

export default AboutProjectsScreen;
