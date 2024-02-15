import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cardData from "./cardData"; 
import "../Styles/Projects.css";

export default function Projects() {
    return (
      <>
            <NavBar />
            <div className="projcont">
        <Row xs={1} md={2} className="g-4">
          {cardData.map((data, idx) => (
            <Col key={idx} className="indicol">
              <Card className="projcard">
                <Card.Img variant="top" src={data.imageUrl} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Card.Title>{data.link}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
            </Row>
            </div>
        <Footer />
      </>
    );
}