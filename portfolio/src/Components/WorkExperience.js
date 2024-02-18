import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import WorkEx from "./Data/WorkEx";
import Card from "react-bootstrap/Card";
import "../Styles/WorkExperience.css";

export default function WorkExperience() {
  // useEffect(() => {
  //   ScrollReveal({
  //     reset: true,
  //     distance: "15rem",
  //     duration: 2000,
  //     delay: 500,
  //   });
    
  //   ScrollReveal().reveal(".card", { origin: "top" });
  // }, []);
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();
    
    // Define custom function to alternate origins
    const alternateOrigin = (index) => {
      return index % 2 === 0 ? "left" : "right";
    };

    // Call reveal on specific elements with alternate origins
    document.querySelectorAll(".work").forEach((element, index) => {
      sr.reveal(element, {
        origin: alternateOrigin(index),
        distance: "20rem",
        duration: 2000,
        delay: 500,
        reset: true,
      });
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="expcont">
        {WorkEx.map((work, index) => (
          <Card className="work" key={index}>
            <Card.Img variant="top" src={`/Images/${work.imageUrl}`} />
            <Card.Body>
              <div className="title">
                <Card.Title className="compname">{work.companyname}</Card.Title>
                <Card.Title className="doe">{work.duration}</Card.Title>
              </div>
              <Card.Title className="desig">{work.role}</Card.Title>
              <Card.Text className="workinfo">{work.workdetails}</Card.Text>
              <Card.Text className="techstack">{work.TechStackUsed}</Card.Text>
              <Card.Text className="lasttext">
                For further information, please visit my LinkedIn profile, which
                is accessible via the homepage.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}
