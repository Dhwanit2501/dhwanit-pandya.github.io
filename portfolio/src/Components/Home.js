import { useEffect, useState } from "react";
import Footer from "./Footer"
import NavBar from "./NavBar"
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import "../Styles/Home.css"
export default function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer^1500",
        "Cybersecurity Expert^1500",
        "Student^1500",
      ],
      typeSpeed: 100,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "15rem",
      duration: 2000,
      delay: 500,
    });
    ScrollReveal().reveal(".flex-items", { origin: "top" });
    ScrollReveal().reveal("#profilepic", { origin: "bottom" });
    ScrollReveal().reveal(".grad-details", { origin: "left" });
    ScrollReveal().reveal(".head", { origin: "right" });
    ScrollReveal().reveal(".icon1", { origin: "bottom" });
  }, []);

  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.0.51/build/spline-viewer.js";

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Check if animation has already been played
    const hasAnimationPlayed = sessionStorage.getItem("hasAnimationPlayed");
    if (!hasAnimationPlayed) {
      // Animation hasn't been played, mark as played
      sessionStorage.setItem("hasAnimationPlayed", true);
      setAnimationPlayed(true);
    }
  }, []);
const [dateTime, setDateTime] = useState(new Date());

useEffect(() => {
  const timerID = setInterval(() => tick(), 1000); // Update date and time every second

  return () => {
    clearInterval(timerID); // Cleanup function to clear interval when component unmounts
  };
}, []); // Empty dependency array ensures effect runs only once after initial render

function tick() {
  setDateTime(new Date()); // Update date and time
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = days[dateTime.getDay()];

  return (
    <>
      <div>
        <NavBar />
        <div className={animationPlayed ? "spline" : ""}>
          {animationPlayed && (
            <spline-viewer url="https://prod.spline.design/YQg46qiMyiHhufwr/scene.splinecode"></spline-viewer>
          )}
        </div>
        <div className="dtd">
          {animationPlayed && (
            <>
              <h2>{dateTime.toLocaleTimeString()}</h2>
              <h2>{dateTime.toLocaleDateString()}</h2>
              <h2>{dayOfWeek}</h2>
            </>
          )}
        </div>
        <div className="profiledisplay">
          <div className="flex-items">
            <div className="flex-item1">Hello, It's Me</div>
            <div className="flex-item2">Dhwanit Pandya</div>
            <div className="flex-item1">
              And I am a <span className="multiple-text"></span>
            </div>
            <div className="flex-item3">
              Currently working at EY as a Senior Analyst in Tech Consulting
              (Cybersecurity). I’m a B.Tech graduate in Electronics and
              Telecommunication Engineering from Dwarkadas J. Sanghvi College Of
              Engineering. I am interested in web development, acquired my
              skillset in Front-End, and now currently working on my Back-End
              skills. Apart from web development I also possess coding skills
              along with knowledge of various languages like C, C++. I am also a
              passionate learner and open to trying new things. Looking forward
              to an opportunity to work with new faces and internships for more
              work experience.
            </div>
          </div>
          <div className="flex-items" id="profilepic">
            <img src="/Images/prof2.png" />
          </div>
        </div>
        <div className="spline1">
          <spline-viewer url="https://prod.spline.design/6RMtuzahayfgzdly/scene.splinecode"></spline-viewer>
        </div>
        <div className="grad-details">
          <div className="cont1">
            <div className="inst-name">
              Dwarkadas J. Sanghvi College of Engineering
            </div>
            <div className="details">
              <span className="Date">2019 - 2023</span>
              <span className="Date">
                Bachleor of Technology in Electronics and Telecommunication
                Engineering
              </span>
              <span className="Date">
                I completed my undergraduate in EXTC which not only gave me an
                understanding of the hardware technology that powers electronic
                devices but also provided a comprehensive grasp of diverse
                facets within the field of computer science. During my academic
                journey, I was exposed to various subjects, including Computer
                Networks, Internet Engineering and Network Security, and Big
                Data Analytics, which deepened my comprehension of cloud
                architecture, query optimization, and network security.
                Furthermore, engaging in the practical lab on Data Structures,
                and Algorithms helped me hone my programming skills using
                various languages. My hard work and dedication throughout my
                academic journey earned me a CGPA of 9.24/10.
              </span>
            </div>
          </div>
        </div>
        <div className="Contact" id="contact">
          <div className="head">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-triangle-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
              />
            </svg>
            <span>
              Let’s Connect : Because Great Journeys Start with a Hello
            </span>
          </div>
          <div className="icons">
            <div className="icon1">
              <a
                href="mailto:pandyadhwanit25@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <spline-viewer
                  loading-anim-type="none"
                  url="https://prod.spline.design/Hkt4dJZOLqC6fZvf/scene.splinecode"
                ></spline-viewer>
              </a>
            </div>
            <div className="icon1">
              <a
                href="https://www.linkedin.com/in/dhwanitpandya"
                target="_blank"
                rel="noreferrer"
              >
                <spline-viewer url="https://prod.spline.design/8kobiYZWc-Arl2Js/scene.splinecode"></spline-viewer>
              </a>
            </div>
            <div className="icon1">
              <a
                href="https://www.instagram.com/dhwanit_pandya/"
                target="_blank"
                rel="noreferrer"
              >
                <spline-viewer url="https://prod.spline.design/pgCRpnGmGm3chbea/scene.splinecode"></spline-viewer>
              </a>
            </div>
            <div className="icon1">
              <a
                href="https://github.com/Dhwanit2501"
                target="_blank"
                rel="noreferrer"
              >
                <spline-viewer url="https://prod.spline.design/EPsg3ukOZJAIG3S2/scene.splinecode"></spline-viewer>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}