import { useState,useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Loader from "../Loader";
import { toast } from "react-toastify";

import { useCreateExperienceMutation } from "../../slices/adminApiSlices";

const CreateExperience = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbacktype, setFeedbacktype] = useState("danger");

  const [createExperience, { isLoading, error }] =
    useCreateExperienceMutation();

  const sendExperience = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        company,
        location,
        role,
        startDate,
        endDate,
        description,
        status,
      };

      const res = await createExperience(data).unwrap();
      if (res) {
        toast.success("Experience created successfully");
      }
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }

    setTitle("");
    setCompany("");
    setLocation("");
    setRole("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setStatus(false);
  };

  useEffect(() => {
    if (error) {
      setFeedback(error.data?.message || error.message);
      setFeedbacktype("danger");
    }
  }, [error]);

  return (
    <>
    <Container fluid style={{marginTop:"5rem"}}>
      {feedback && (
        <Alert
          variant={feedbacktype}
          className="my-2"
          dismissible
          onClose={() => setFeedback("")}
        >
          {feedback}
        </Alert>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <Container >
          <h2 className="my-4">
            Create Experience
          </h2>
          <Form onSubmit={sendExperience}>
            <Form.Group controlId="title">
              <Form.Label>
                <b>Title</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="company">
              <Form.Label>
                <b>Company</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>
                <b>Location</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="role">
              <Form.Label>
                <b>Role</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="startDate">
              <Form.Label>
                <b>Start Date</b>
              </Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="endDate">
              <Form.Label>
                <b>End Date</b>
              </Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>
                <b>Description</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>
                <b>Status</b>
              </Form.Label>
              <Form.Check
                type="checkbox"
                label="Currently working here"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
            </Form.Group>

            <Button variant="success" className=" my-4" type="submit">
              Create Experience
            </Button>
          </Form>
        </Container>
      )}
      </Container>
    </>
  );
};

export default CreateExperience;
