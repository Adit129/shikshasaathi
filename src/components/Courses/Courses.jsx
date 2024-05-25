import React, { useState, useEffect } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch course information
    fetch("http://localhost:5050/course-content")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>Our Courses</h1>
          </Col>
        </Row>
        <Container>
          <Row>
            {courses.map((course, index) => (
              <Col lg="3" md="6" key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Card.Text>Duration: {course.duration} years</Card.Text>
                    <Button variant="primary">About courses.. </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Courses;
