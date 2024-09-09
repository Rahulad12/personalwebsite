import React, { useState } from "react";
import Loader from "../Loader";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

import { useCreateProjectMutation } from "../../slices/adminApiSlices";

const CreateProjects = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setProjectStatus] = useState(false);

  const [createProject, { isLoading, errro, refetch }] =
    useCreateProjectMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title,
        description,
        startDate,
        endDate,
        link,
        status,
      };

      const res = await createProject(data).unwrap();
      if (res) {
        toast.success("Project created successfully");
      } else {
        toast.error("Failed to create project");
      }
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }

    // Clear form fields after submission
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setLink("");
    setProjectStatus(false);
  };

  return (
    <Container style={{marginTop:"5rem"}}>
      {isLoading && <Loader />}
      <h2 className="my-4">Create Projects</h2>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="title">
              <Form.Label>
                <strong>Title:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>
                <strong>Description:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Project description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="startdate">
              <Form.Label>
                <strong>Start Date:</strong>
              </Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="enddate">
              <Form.Label>
                <strong>End Date:</strong>
              </Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="link">
              <Form.Label>
                <strong>Project Link:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Project URL"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="projectstatus">
              <Form.Label>
                <strong>Completed</strong>
              </Form.Label>
              <Form.Check
                type="checkbox"
                checked={status}
                onChange={(e) => setProjectStatus(e.target.checked)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="success" className="my-4">
          Create Project
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProjects;
