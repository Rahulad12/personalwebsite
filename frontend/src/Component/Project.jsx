import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../customcss/project.css";

const Project = ({ projects }) => {
  return (
    <Container className="card_container ">
      <Card className="my-3 p-3 rounded project-card">
        <Card.Body>
          <Link
            to={`/project/${projects._id}`}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <Card.Title as="div" className="project-title">
              <strong>{projects.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text className="project-description">
            {projects.description.slice(0, 50)}...
          </Card.Text>
          <Link to={`/project/${projects._id}`}>
            <Button variant="primary" className="see-more-btn">
              See More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Project;
