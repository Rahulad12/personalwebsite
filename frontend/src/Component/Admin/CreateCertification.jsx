import React from "react";
import { useState } from "react";
import Loader from "../Loader";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

import { useCreateCertificateMutation } from "../../slices/adminApiSlices";

const CreateCertification = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  // const [image, setImage] = useState("");

  const [createCertificate, { isLoading, error, refetch }] =
    useCreateCertificateMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title,
        description,
        date,
        // image,
      };

      const res = await createCertificate(data).unwrap();
      if (res) {
        toast.success("Project created successfully");
      } else {
        toast.error("Failed to create project");
      }
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }

    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <>
      <Container style={{marginTop:"5rem"}}>
      {isLoading && <Loader />}
        <h2 className="my-4"> Create Certification</h2>

        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="title">
                <Form.Label>
                  <strong>Title:</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Certificate Tiitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>
                  <strong>Descritpion:</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Certificate description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              {/* <Form.Group controlId="image">
                <Form.Label>
                  <strong>Image:</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Image URL"
                  onChange={imageUploadHandler}
                  required
                ></Form.Control>
              </Form.Group> */}
              <Form.Group controlId="date">
                <Form.Label>
                  <strong>Date:</strong>{" "}
                </Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="success" className="my-4">
            Create Project
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateCertification;
