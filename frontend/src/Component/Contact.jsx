import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import Loader from "./Loader";
import "../customcss/contact.css";

import { useSendContactMutation } from "../slices/systemApiSlices";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hire, setHire] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const [sendContact, { isLoading, isError, refetch }] =
    useSendContactMutation();

  useEffect(() => {
    document.title = "Contact | Portfolio";
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await sendContact({
        name,
        email,
        message,
        hire,
      });
      setFeedback("Message sent successfully.");
      setFeedbackType("success");
      setName("");
      setEmail("");
      setMessage("");
      setHire("");
    } catch (error) {
      setFeedback(error.response.data.message);
      setFeedbackType("danger");
    }
  };

  return (
    <Container className="contact-container my-5">
      <h2 className="text-center">Get in Touch</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {feedback && (
            <Alert
              variant={feedbackType}
              onClose={() => setFeedback("")}
              dismissible
              className="my-3"
            >
              {feedback}
            </Alert>
          )}
          <Form
            className="contact-form p-4 shadow-lg rounded"
            onSubmit={submitHandler}
          >
            <Form.Group controlId="formBasicName" className="my-3">
              <Form.Label>
                <strong>Name:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="my-3">
              <Form.Label>
                <strong>Email address:</strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className="my-3">
              <Form.Label>
                <strong>Message:</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicHire" className="my-3">
              <Form.Label>
                <strong>Tell Me More About Your Project:</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter your project requirements"
                value={hire}
                onChange={(e) => setHire(e.target.value)}
              />
              <Form.Text className="text-muted">
                I'll get back to you as soon as possible.
              </Form.Text>
            </Form.Group>

            <Button type="submit" className="btn btn-primary w-100 mt-4">
              Submit
            </Button>

            <small className="text-muted">
              <strong>Note:</strong> Your message will be sent to the my email
            </small>
          </Form>
        </>
      )}
    </Container>
  );
};

export default Contact;
