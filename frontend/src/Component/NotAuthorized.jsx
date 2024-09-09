import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import '../customcss/NotAuthorized.css';

const NotAuthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Container className="not-authorized-container text-center">
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <div className="icon-container mb-4">
            <FaLock className="lock-icon" />
          </div>
          <h1 className="display-4">Oops!</h1>
          <h2 className="mb-4">You Are Not Authorized</h2>
          <p className="lead">
            Sorry, you do not have the necessary permissions to access this page.
          </p>
          <Button variant="primary" onClick={handleGoBack} className="mt-3">
            Go Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotAuthorized;
