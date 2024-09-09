import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import {
  useGetAchievementQuery,
  useGetCertificateQuery,
} from "../slices/systemApiSlices";
import Loader from "../Component/Loader";
import "../customcss/achievement.css"; // Assuming you have a custom CSS file

const Achievement = () => {
  const [achievement, setAchievement] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [certificaterrormessage, setCertificaterrormessage] = useState("");
  const [achievementerrormessage, setAchievementerrormessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const {
    data: achievementData,
    error: achievementError,
    isLoading: achievementLoading,
  } = useGetAchievementQuery();
  const {
    data: certificateData,
    error: certificateError,
    isLoading: certificateLoading,
  } = useGetCertificateQuery();

  document.title = "Achievement | Portfolio";

  useEffect(() => {
    if (achievementData) setAchievement(achievementData);
    if (achievementError) {
      setAchievementerrormessage(
        achievementError.message || "Error fetching achievements."
      );
      setFeedbackType("danger");
    }

    if (certificateData) setCertificate(certificateData);
    if (certificateError) {
      setCertificaterrormessage(
        certificateError.message || "Error fetching certificates."
      );
      setFeedbackType("danger");
    }
  }, [achievementData, achievementError, certificateData, certificateError]);

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
          <Col md={6} className="achievement-col">
            <h2 className="my-3 section-title">
              <strong>Achievements</strong>
            </h2>
            {achievementerrormessage && (
              <Alert variant="danger">{achievementerrormessage}</Alert>
            )}

            {achievementLoading ? (
              <Loader />
            ) : (
              achievement.map((a) => (
                <Card key={a._id} className="my-3 achievement-card">
                  <Card.Body>
                    <Card.Title as="div">
                      <strong>{a.title}</strong>
                    </Card.Title>
                    <Card.Text className="achievement-description">
                      {a.description}
                    </Card.Text>
                    <Card.Text className="achievement-date">
                      <strong>Date: </strong> {a.date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>
          <Col md={6} className="certificate-col">
            <h2 className="my-3 section-title">
              <strong>Certifications</strong>
            </h2>
            {certificaterrormessage && (
              <Alert variant="danger">{certificaterrormessage}</Alert>
            )}
            {certificateLoading ? (
              <Loader />
            ) : (
              certificate.map((c) => (
                <Card key={c._id} className="my-3 certificate-card">
                  <Card.Body>
                    <Card.Title as="div">
                      <strong>{c.title}</strong>
                    </Card.Title>
                    <Card.Text className="certificate-description">
                      {c.description}
                    </Card.Text>
                    <Card.Text className="certificate-date">
                      <strong>Date: </strong> {c.date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Achievement;
