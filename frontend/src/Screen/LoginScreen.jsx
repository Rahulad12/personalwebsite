import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useAdminLoginMutation } from "../slices/systemApiSlices";
import Loader from "../Component/Loader";
import {toast} from 'react-toastify';
import { setCredentials } from "../slices/authSlices";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [adminLogin, { isLoading, isError, error }] = useAdminLoginMutation();

  useEffect(() => {
    if (isError) {
      setFeedback("Invalid Credentials");
    }
  }, [isError]);

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent page reload
    const data = {
      userName,
      password,
    };

    try {
      const res = await adminLogin(data).unwrap(); // Unwrap the response
      dispatch(setCredentials(res));
      toast.success("Logged In Successfully");
      navigate("/");
    } catch (error) {
      setFeedback("Invalid Credentials"+ error);
      
    }
  };

  return (
    <>
      <Container style={{marginTop:"5rem"}}>
        {feedback && (
          <Alert variant="danger" dismissible onClose={() => setFeedback("")}>
            {feedback}
          </Alert>
        )}
        <h3 className="my-4">Only Admin Can Log here</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-3">
            Login In
          </Button>
        </Form>
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default LoginScreen;
