import Container from "react-bootstrap/Container";
import React, { useState,useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/NavBar.css';


export default function NavBar() {

  const [activePage, setActivePage] = useState("home"); // State variable to track active page

  useEffect(() => {
    // Set the activePage to 'home' when the component mounts
    setActivePage('home');
  }, []);


  const handlePageChange = (page) => {
    setActivePage(page); // Update active page when user navigates to a different page
    
  };
  return (
    <>
      <Navbar className="nav">
        <Container id="cont1">
          <Navbar.Brand href="#home">
            <video width="70" height="70" autoPlay loop muted>
              <source src="./Images/logo4.webm" type="video/webm" />
            </video>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={`nav-item ${
                activePage === "home" ? "active" : "inactive"
              }`}
              onClick={() => handlePageChange("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/About"
              className={`nav-item ${
                activePage === "about" ? "active" : "inactive"
              }`}
              onClick={() => handlePageChange("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/Work Experience"
              className={`nav-item ${
                activePage === "work" ? "active" : "inactive"
              }`}
              onClick={() => handlePageChange("work")}
            >
              Work Experience
            </Nav.Link>
            <Nav.Link
              href="/Contact"
              className={`nav-item ${
                activePage === "contact" ? "active" : "inactive"
              }`}
              onClick={() => handlePageChange("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
