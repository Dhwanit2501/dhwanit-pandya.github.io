import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/NavBar.css';


export default function NavBar() {
  
  const [activePage, setActivePage] = useState(""); // State variable to track active page
  const location = useLocation(); // Get current location

  useEffect(() => {
    // Update activePage based on the current location's pathname
    setActivePage(location.pathname);
  }, [location.pathname]); // Update when pathname changes

const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar className="nav" expand="lg" variant="dark">
        <Container id="cont1">
          <Navbar.Brand href="#home">
            <video width="70" height="70" autoPlay loop muted>
              <source src="./Images/logo4.webm" type="video/webm" />
            </video>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle}>
            {isOpen ? (
              <FaTimes className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className={isOpen ? "show" : ""}>
            <Nav className="me-auto">
              <NavLink
                to="/"
                activeClassName="active" // Apply 'active' class when active
                className={`nav-item ${
                  activePage === "/" ? "active" : "inactive"
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/About"
                activeClassName="active" // Apply 'active' class when active
                className={`nav-item ${
                  activePage === "/About" ? "active" : "inactive"
                }`}
              >
                About
              </NavLink>
              <NavLink
                to="/Work Experience"
                activeClassName="active" // Apply 'active' class when active
                className={`nav-item ${
                  activePage === "/Work Experience" ? "active" : "inactive"
                }`}
              >
                Work Experience
              </NavLink>
              <NavLink
                to="/Contact"
                activeClassName="active" // Apply 'active' class when active
                className={`nav-item ${
                  activePage === "/Contact" ? "active" : "inactive"
                }`}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
