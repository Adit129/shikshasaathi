import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TypedText from "./TypedText";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "../components/Contact/contact.css";
import "../components/About/about.css";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../components/Courses/courses.css";
import "../components/Gallery/gallery.css";
import Img from "../assests/images/seo.png";
import Img1 from "../assests/images/why-choose-us.png";
import Img2 from "../assests/images/web-development.png";
import aboutImg from "../assests/images/about-us.png";
import heroImg from "../assests/images/girl.jpg";
import "../components/Hero-Section/hero-section.css";
import "../App.css";
const Home = () => {
  const [selectedBackground, setSelectedBackground] = useState(heroImg);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    // Fetch background image
    fetch("http://localhost:5050/update-background")
      .then((response) => response.json())
      .then((data) => {
        setSelectedBackground(data.backgroundUrl || heroImg);
      })
      .catch((error) => console.error("Error fetching background:", error));

    // Fetch About section content
    fetch("http://localhost:5050/about-content")
      .then((response) => response.json())
      .then((data) => {
        setAboutTitle(data.title || "About Us");
        setAboutContent(data.content || "Add your about content here");
      })
      .catch((error) => console.error("Error fetching About content:", error));

    // Fetch text content
    fetch("http://localhost:5050/text-content")
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch((error) => console.error("Error fetching text content:", error));
  }, []);

  return (
    <Fragment>
      <div className="home-background">
        <Header />

        {/* Hero section start */}
        <section
          className="hero-image"
          style={{
            backgroundImage: `url(${selectedBackground})`,
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <h2 className="mb-4 hero__title">
                    Welcome to <TypedText />
                  </h2>
                  <h2 className="mb-4 hero__title">{title}</h2>
                  <p className="mb-5">{content}</p>
                </div>
                <div className="search">
                  <input type="text" placeholder="Search" />
                  <button className="btn">Search</button>
                </div>
              </Col>

              {/* <Col lg="6" md="6">
                <img src={heroImg} alt="" className="w-100 hero__img" />
              </Col> */}
            </Row>
          </Container>
        </section>

        {/* ABout us start */}
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

        {/* Courses start */}

        <Container fluid>
          <Row>
            <Col className="col-12 text-center py-4">
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Container fluid>
            <Row>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  autoplay: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Master of Computer Applications</Card.Title>
                        <Card.Text>
                          MCA is a postgraduate degree program designed to
                          provide students with a deep understanding of computer
                          applications and software development.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>
                          Bachelor's of Computer Applications
                        </Card.Title>
                        <Card.Text>
                          BCA is an undergraduate degree program designed to
                          equip students with a strong foundation in computer
                          applications and software development.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Master of Computer Applications</Card.Title>
                        <Card.Text>
                          MCA is a postgraduate degree program designed to
                          provide students with a deep understanding of computer
                          applications and software development.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>
                          Bachelor's of Computer Applications
                        </Card.Title>
                        <Card.Text>
                          BCA is an undergraduate degree program designed to
                          equip students with a strong foundation in computer
                          applications and software development.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Bachelor of Technology </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Master of Science </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>Bachelor's of Science </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>B. Pharma</Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
                <Col lg="3" md="6">
                  <SwiperSlide>
                    {" "}
                    <Card
                      style={{ width: "24rem" }}
                      className={`gallery__item`}
                    >
                      <Card.Body>
                        <Card.Title>PGDCA </Card.Title>
                        <Card.Text>
                          B.Tech is an undergraduate degree program focused on
                          providing students with a strong foundation in
                          engineering principles and technical skills.
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          to="/course"
                          style={{ backgroundColor: "rgb(23, 191, 158)" }}
                        >
                          More info..{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Col>
              </Swiper>
            </Row>
          </Container>
        </Container>

        {/* Gallery starts */}

        <h1>Gallery</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Img} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img1} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img2} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img1} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img2} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img1} className={`gallery__item`} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Img2} className={`gallery__item`} alt="" />
          </SwiperSlide>
        </Swiper>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
