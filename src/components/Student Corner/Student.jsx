import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import StudentModal from "./StudentModal";

const StudentCorner = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.username.value;
    const dob = event.target.dob.value;

    try {
      const response = await fetch(
        `http://localhost:5050/students?name=${name}&dob=${dob}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setStudentDetails(data[0]);
          setIsModalOpen(true); // Open modal when student details are fetched
        } else {
          alert("Student not found");
        }
      } else {
        throw new Error("Failed to fetch student record");
      }
    } catch (error) {
      console.error("Error fetching student record:", error);
      alert("Error fetching student record. Please try again later.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStudentDetails(null);
  };

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1 className="headerImg">Student's Corner</h1>
          </Col>
        </Row>

        <form
          id="contact_form"
          name="contact_form"
          method="post"
          onSubmit={handleSubmit}
        >
          <h2>Check Your Record</h2>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <label>User name</label>
              <input
                type="text"
                required
                maxLength="50"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter your username "
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                required
                className="form-control"
                id="dob"
                name="dob"
              />
            </div>
          </div>
          <button type="submit" className="btn btn btn-success btngrp">
            Check Record
          </button>
        </form>

        {studentDetails && (
          <StudentModal
            studentDetails={studentDetails}
            closeModal={closeModal}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default StudentCorner;
