import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container,Modal } from "react-bootstrap";
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
  const [modal, showModal] = useState(false);
  const [Sendername, setSendername] = useState("");

  const [sendContact, { isLoading, isError, refetch }] =
    useSendContactMutation();

  useEffect(() => {
    document.title = "Contact | Portfolio";
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setSendername(name);
      const { data } = await sendContact({
        name,
        email,
        message,
        hire,
      });
      showModal(true);
      setName("");
      setEmail("");
      setMessage("");
      setHire("");
    } catch (error) {
      setFeedback(error.response.data.message);
      setFeedbackType("danger");
    }
  };

  //getting day greet
  const date = new Date();
  const hours = date.getHours();
  var greet;
  if (hours < 12) {
    greet = "Good Morning";
  } else if (hours < 18) {
    greet = "Good Afternoon";
  } else {
    greet = "Good Evening";
  }
  


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

          <Modal show={modal} onHide={() => showModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Message Sent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {greet} <b>{Sendername}</b> Thank you for reaching out to me. I'll get back to you as soon
                as possible.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => showModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Contact;
