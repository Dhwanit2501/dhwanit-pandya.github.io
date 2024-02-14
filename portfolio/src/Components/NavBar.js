import Container from "react-bootstrap/Container";
import React, { useState, useEffect,useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/NavBar.css';


export default function NavBar() {
  //   const [activePage, setActivePage] = useState(""); // State variable to track active page
  //   const location = useLocation(); // Get current location

  //   useEffect(() => {
  //     // Update activePage based on the current location's pathname
  //     setActivePage(location.pathname);
  //   }, [location.pathname]); // Update when pathname changes

  // const [isOpen, setIsOpen] = useState(false);
  //   const handleToggle = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const [isScrolled, setIsScrolled] = useState(false);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 0) {
  //         setIsScrolled(true);
  //       } else {
  //         setIsScrolled(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   return (
  //     <>
  //       <Navbar
  //         className={`nav ${isScrolled ? "scrolled" : ""}`}
  //         expand="lg"
  //         variant="dark"
  //         sticky="top"
  //       >
  //         <Container id="cont1">
  //           <Navbar.Brand href="#home">
  //             <video width="70" height="70" autoPlay loop muted>
  //               <source src="./Images/logo4.webm" type="video/webm" />
  //             </video>
  //           </Navbar.Brand>
  //           <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle}>
  //             {isOpen ? (
  //               <FaTimes className="icon" />
  //             ) : (
  //               <FaBars className="icon" />
  //             )}
  //           </Navbar.Toggle>
  //           <Navbar.Collapse id="navbarScroll" className={isOpen ? "show" : ""}>
  //             <Nav className="me-auto">
  //               <NavLink
  //                 to="/"
  //                 activeClassName="active" // Apply 'active' class when active
  //                 className={`nav-item ${
  //                   activePage === "/" ? "active" : "inactive"
  //                 }`}
  //               >
  //                 Home
  //               </NavLink>
  //               <NavLink
  //                 to="/About"
  //                 activeClassName="active" // Apply 'active' class when active
  //                 className={`nav-item ${
  //                   activePage === "/About" ? "active" : "inactive"
  //                 }`}
  //               >
  //                 About
  //               </NavLink>
  //               <NavLink
  //                 to="/Work Experience"
  //                 activeClassName="active" // Apply 'active' class when active
  //                 className={`nav-item ${
  //                   activePage === "/Work Experience" ? "active" : "inactive"
  //                 }`}
  //               >
  //                 Work Experience
  //               </NavLink>
  //               <NavLink
  //                 to="/Contact"
  //                 activeClassName="active" // Apply 'active' class when active
  //                 className={`nav-item ${
  //                   activePage === "/Contact" ? "active" : "inactive"
  //                 }`}
  //               >
  //                 Contact
  //               </NavLink>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Container>
  //       </Navbar>
  //     </>
  //   );
  // }

  const location = useLocation(); // Get current location

  const activePage = useMemo(() => {
    // Extract pathname from location
    const { pathname } = location;
    return pathname;
  }, [location.pathname]); // Update only when pathname changes

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle click event
  const handleClick = () => {
    // Check if the current page is the homepage
    if (location.pathname === "/") {
      // Scroll to the contact section on the homepage
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const offset = -50; // Adjust scroll position by 50px up (negative value for upward scroll)
        window.scrollTo({
          top: contactSection.offsetTop + offset,
          behavior: "smooth",
        });
      }
    } 
  };
  return (
    <Navbar
      className={`nav ${isScrolled ? "scrolled" : ""}`}
      expand="lg"
      variant="dark"
      sticky="top"
    >
      <Container id="cont1">
        <Navbar.Brand href="#home">
          <video width="70" height="70" autoPlay loop muted>
            <source src="./Images/logo4.webm" type="video/webm" />
          </video>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className={isOpen ? "show" : ""}>
          <Nav className="me-auto">
            <NavLink
              to="/"
              activeClassName="active"
              className={`nav-item ${
                activePage === "/" ? "active" : "inactive"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              activeClassName="active"
              className={`nav-item ${
                activePage === "/About" ? "active" : "inactive"
              }`}
            >
              About
            </NavLink>
            <NavLink
              to="/Work Experience"
              activeClassName="active"
              className={`nav-item ${
                activePage === "/Work Experience" ? "active" : "inactive"
              }`}
            >
              Work Experience
            </NavLink>
            <NavLink
              onClick={handleClick}
              activeClassName="active"
              className={`nav-item ${
                activePage === "/" ? "activec" : "inactivec"
              }`}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}