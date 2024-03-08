import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Student from "./components/Student Corner/Student";
import Certificate from "./components/Certificate/Certificate";

const App = () => (
  <Router>
    <Routes>
      <Route path="/shikshasaathi" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/student" element={<Student />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
