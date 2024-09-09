import React, { useState, useEffect } from "react";
import { Container, Alert, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Loader from "../Loader";
import { useGetContactdetailsQuery } from "../../slices/adminApiSlices";
import {
  useDeletContactMutation,
  useSetStatusMutation,
} from "../../slices/systemApiSlices";

const Employer = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbacktype, setFeedbacktype] = useState("danger");

  // Get contact details
  const {
    data: employeer,
    error,
    isLoading,
    refetch,
  } = useGetContactdetailsQuery();

  // Delete contact mutation
  const [DeletContact, { isLoading: deleteLoading }] = useDeletContactMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const res = await DeletContact(id).unwrap();
        setFeedback(res.message || "Deleted successfully");
        setFeedbacktype("success");
        refetch();
      } catch (err) {
        setFeedback(err?.data?.message || err.error || "Error occurred");
        setFeedbacktype("danger");
      }
    }
  };

  // Set status mutation
  const [setStatus] = useSetStatusMutation();

  const statusHandler = async (id, status) => {
    try {
      const res = await setStatus({ id, status }).unwrap();
      setFeedback(res.message || "Status updated successfully");
      setFeedbacktype("success");
      refetch();
    } catch (err) {
      setFeedback(err?.data?.message || err.error || "Error occurred");
      setFeedbacktype("danger");
    }
  };

  useEffect(() => {
    if (error) {
      setFeedback(error?.data?.message || error.error || "Error occurred");
      setFeedbacktype("danger");
    }
  }, [error]);

  return (
    <div style={{marginTop:"5rem"}}>
      {feedback && (
        <Alert
          variant={feedbacktype}
          dismissible
          className="my-4"
          onClose={() => setFeedback("")}
        >
          {feedback}
        </Alert>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h2 className="my-3">Employeer</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Hire</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employeer &&
                employeer.map((employeer) => (
                  <tr key={employeer._id}>
                    <td>{employeer.name}</td>
                    <td>{employeer.email}</td>
                    <td>{employeer.message}</td>
                    <td>{employeer.hire}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={employeer.status}
                        onChange={(e) => statusHandler(employeer._id, e.target.checked)} // Use checked value directly
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandler(employeer._id)}
                        disabled={deleteLoading}
                      >
                        {deleteLoading ? "Deleting.." : <FaTrash />}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default Employer;
