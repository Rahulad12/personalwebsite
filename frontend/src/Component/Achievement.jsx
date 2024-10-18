import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useGetAchievementQuery, useGetCertificateQuery } from "../slices/systemApiSlices";
import Loader from "../Component/Loader";
import "../customcss/achievement.css";

const DataCard = ({ data, error, loading, title }) => {
  if (loading) return <Loader />;
  if (error) return <Alert variant="danger">{error.message}</Alert>;

  return data.map((item) => (
    <Card key={item._id} className="my-3">
      <Card.Body>
        <Card.Title as="div">
          <strong>{item.title}</strong>
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text><strong>Date: </strong> {item.date}</Card.Text>
      </Card.Body>
    </Card>
  ));
};

const Achievement = () => {
  const { data: achievementData, error: achievementError, isLoading: achievementLoading } = useGetAchievementQuery();
  const { data: certificateData, error: certificateError, isLoading: certificateLoading } = useGetCertificateQuery();
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  useEffect(() => {
    if (achievementError || certificateError) {
      setFeedback("Error fetching data.");
      setFeedbackType("danger");
    }
  }, [achievementError, certificateError]);

  document.title = "Achievement | Portfolio";

  return (
    <div className="achievement-section">
      <Container style={{ marginTop: "5rem" }}>
        {feedback && (
          <Alert
            className="my-2"
            variant={feedbackType}
            onClose={() => setFeedback("")}
            dismissible
          >
            {feedback}
          </Alert>
        )}
        <Row>
          <Col md={6}>
            <h2 className="my-3 section-title"><strong>Achievements</strong></h2>
            <DataCard
              data={achievementData}
              error={achievementError}
              loading={achievementLoading}
              title="Achievements"
            />
          </Col>
          <Col md={6}>
            <h2 className="my-3 section-title"><strong>Certifications</strong></h2>
            <DataCard
              data={certificateData}
              error={certificateError}
              loading={certificateLoading}
              title="Certifications"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Achievement;
