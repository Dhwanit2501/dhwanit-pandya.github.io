import NavBar from "./NavBar";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/About.css"

export default function About() {
  
  // ------------ Reveal on Scroll ------------
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "15rem",
      duration: 2000,
    });
    ScrollReveal().reveal(".abthead", { origin: "top", delay: 500 });

    // Then reveal ".carousal" after ".abthead" with a delay
    ScrollReveal().reveal(".carousal", { origin: "left", delay: 3000 });

    // Finally, reveal ".abttext" simultaneously with ".carousal" after their respective delays
    ScrollReveal().reveal(".abttext", { origin: "right", delay: 3000 });
  }, []);

  return (
    <>
      <NavBar />
      <div className="cont2">
        <div className="carousal">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/Images/cp1.jpg"
                text="Second slide"
              />
              <Carousel.Caption>
                <h3>Candid</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/Images/cp2.jpg"
                text="First slide"
              />
              <Carousel.Caption>
                <h3>Athletic</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/Images/cp3.jpg"
                text="Third slide"
              />
              <Carousel.Caption>
                <h3>Visionary</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/Images/cp7.jpg"
                text="Third slide"
              />
              <Carousel.Caption>
                <h3>Exploratory</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="aboutme">
          <div className="abthead">So, Who Am I ?</div>
          <div className="abttext">
            <p>
              Welcome to my digital haven! I'm genuinely glad you've found your
              way here.Let me give you a glimpse into who I am.
            </p>
            <p>
              <span className="letter">C</span>andidness is a cornerstone of my
              personality, guiding me through life's ups and downs. But through
              it all, I've learned that life's about the journey, not just the
              destination. Whether I'm hitting the gym for an intense workout,
              engaging in heartfelt conversations, or dreaming up bold
              adventures, authenticity is always my guiding principle.
            </p>
            <p>
              <span className="letter">A</span>thleticism is more than just a
              hobby—it's a passion that drives me to push my limits. From
              challenging hikes to intense workouts, I thrive on the rush of
              adrenaline. Team sports, especially cricket, hold a special place
              in my heart as they not only offer the thrill of competition but
              also teach invaluable lessons about teamwork, crucial in every
              aspect of life.
            </p>
            <p>
              When it comes to <span className="letter">V</span>ision, I'm all
              about seeing the big picture. With every step, I'm fueled by the
              belief that the future is full of endless possibilities. I'm
              constantly leveling up, seizing every opportunity to learn and
              grow.
            </p>
            <p>
              <span className="letter">E</span>xploratory by nature, I'm always
              eager to embrace new challenges and expand my horizons. In today's
              fast-paced world, I thrive on staying ahead of the curve, eagerly
              learning new technologies and stepping out of my comfort zone to
              adapt to evolving trends.
            </p>
            <p>
              That's a snapshot of who I am! Thanks for joining me here. Let's
              connect, learn, and grow together. Don't hesitate to reach out
              through my socials, conveniently listed on my homepage. I'm always
              up for collaboration and connection. Looking forward to sharing
              our experiences and stories along the way!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
