import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Card from "react-bootstrap/Card";
import "../Styles/WorkExperience.css";

export default function WorkExperience() {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "15rem",
      duration: 2000,
      delay: 500,
    });
    ScrollReveal().reveal(".card img", { origin: "right" });
    ScrollReveal().reveal(".card-body", { origin: "left" });
    ScrollReveal().reveal(".card", { origin: "top" });
  }, []);

  return (
    <>
      <NavBar />
      <div className="expcont">
        <Card>
          <Card.Img variant="top" src="/Images/EY.png" />
          <Card.Body>
            <div className="title">
              <Card.Title className="compname">Ernst & Young India</Card.Title>
              <Card.Title className="doe">July 2023 - Present</Card.Title>
            </div>
            <Card.Title className="desig">
              Designation: Senior Analyst Tech Consulting (Cybersecurity)
            </Card.Title>
            <Card.Text className="workinfo">
              My experience at EY has been great since the first day I started.
              Here, I was able to apply all I'd learned about computer networks,
              network security, and operating systems to the assignments I was
              assigned. These projects served as both a practical playground for
              applying my skills and a valuable source for learning about new
              sectors within the field of cybersecurity, such as Cloud Security,
              DevSecOps, and other advanced areas. They allowed me to supplement
              my undergraduate studies with hands-on experience and deeper
              insights into these emerging sectors. Client contacts across a
              variety of industries helped me improve my communication
              abilities, allowing me to articulate technical concepts more
              effectively. Simultaneously, I improved my problem-solving skills
              by tackling diverse obstacles in real time to ensure project
              success.
            </Card.Text>
            <Card.Text className="techstack">
              Tech stack : AWS - EC2, IAM | Docker, Kubernetes, Ansible,
              Terraform | Gremlin | Kali Linux, Wireshark
            </Card.Text>
            <Card.Text className="lasttext">
              For further information, please visit my LinkedIn profile, which
              is accessible via the homepage.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
}
