import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container, Modal } from "react-bootstrap";
import Loader from "./Loader";
import "../customcss/contact.css";
import { useSendContactMutation } from "../slices/systemApiSlices";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hire: "",
  });
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [modal, showModal] = useState(false);
  const [Sendername, setSendername] = useState("");

  const [sendContact, { isLoading, isError }] = useSendContactMutation();

  useEffect(() => {
    document.title = "Contact | Portfolio";
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setSendername(formData.name);
      const { data } = await sendContact(formData);
      showModal(true);
      setFormData({ name: "", email: "", message: "", hire: "" });
    } catch (error) {
      setFeedback(error.response?.data?.message || "Error sending message.");
      setFeedbackType("danger");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const date = new Date();
  const hours = date.getHours();
  const greet = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";

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
            <FormInput
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              required
            />
            <Form.Group controlId="formBasicMessage" className="my-3">
              <Form.Label>
                <strong>Message:</strong>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                value={formData.message}
                name="message"
                onChange={handleChange}
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
                value={formData.hire}
                name="hire"
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" className="btn btn-primary w-100 mt-4">
              Submit
            </Button>
            <small className="text-muted">
              <strong>Note:</strong> Your message will be sent to my email.
            </small>
          </Form>

          <Modal show={modal} onHide={() => showModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Message Sent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {greet} <b>{Sendername}</b>, thank you for reaching out to me. I'll get back to you as soon
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

const FormInput = ({ label, type, placeholder, value, name, onChange, required }) => (
  <Form.Group controlId={`formBasic${label}`} className="my-3">
    <Form.Label>
      <strong>{label}:</strong>
    </Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  </Form.Group>
);

export default Contact;
