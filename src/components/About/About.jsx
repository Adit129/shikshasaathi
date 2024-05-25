import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import aboutImg from "../../assests/images/about-us.png";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "reactstrap";
import "./about.css";
const About = () => {
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutContent, setAboutContent] = useState("");
  useEffect(() => {
    // Fetch About section content
    fetch("http://localhost:5050/about-content")
      .then((response) => response.json())
      .then((data) => {
        setAboutTitle(data.title || "About Us");
        setAboutContent(data.content || "Add your about content here");
      })
      .catch((error) => console.error("Error fetching About content:", error));
  }, []);
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>{aboutTitle}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <div className="left-content">
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </Col>
          <Col sm={7}>
            <div className="main-content">
              <h2>Shikshasaathi </h2>

              <p>{aboutContent}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default About;
