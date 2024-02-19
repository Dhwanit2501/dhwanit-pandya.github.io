import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cardData from "./Data/cardData"; 
import pubData from "./Data/pubData";
import "../Styles/Projects.css";

export default function Projects() {
useEffect(() => {
  // Initialize ScrollReveal
  const sr = ScrollReveal();
  sr.reveal(".publicationtitle", {
    origin: window.matchMedia("(max-width: 992px)").matches ? "left" : "right",
    distance: "25rem",
    duration: 2000,
    delay: 100,
    reset: true,
  });
sr.reveal(".publicationtext", { origin: "left",distance: "25rem",
      duration: 2000,
      delay: 1000,
      reset: true, });
  // Define custom function to alternate origins
  const alternateOrigin = (index) => {
    return index % 2 === 0 ? "top" : "bottom";
  };

  // Call reveal on specific elements with alternate origins
  document.querySelectorAll(".indicol").forEach((element, index) => {
    sr.reveal(element, {
      origin: alternateOrigin(index),
      distance: "15rem",
      duration: 2000,
      delay: 500,
      reset: true,
    });
  });
}, []);
  
    return (
      <>
        <NavBar />
        <div className="projcont">
          <Row xs={1} md={3} className="g-4">
            {cardData.map((data, idx) => (
              <Col key={idx} className="indicol">
                <Card className="projcard">
                  <Card.Img
                    id="projimg"
                    variant="top"
                    src={`/Images/${data.imageUrl}`}
                  />
                  <Card.Body>
                    <Card.Title className="projtitle">{data.title}</Card.Title>
                    <Card.Text className="projtext">
                      {data.description}
                    </Card.Text>
                    <Card.Title className="projtech">
                      {data.TechStackUsed}
                    </Card.Title>
                    <Card.Title className="projlink">
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/Images/github.png" />
                      </a>
                      {data.link ? (
                        <a
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link To Website
                        </a>
                      ) : (
                        <span className="no-link">Link To Website</span>
                      )}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="publication">
          <div className="publicationtitle">
            <img src="/Images/rp2.gif" alt="Your GIF" />
            <span className="Pubhead">Publications</span>
          </div>
          {pubData.map((publication, index) => (
            <div className="publicationtext" key={index}>
              {publication.Publicationdetails}
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Images/eye.gif" alt="Your GIF" />
              </a>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
}