import { useEffect } from "react";
import NavBar from "./NavBar"
import Typed from "typed.js";
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
      loop: true, // Set loop to true to continuously loop through the strings
      // onComplete: function (self) {
      //   // Trigger Typed.js to reset after the animation ends
      //   self.reset();
      // },
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); 
    return (
      <>
        <NavBar />
        <div className="profiledisplay">
          <div className="flex-items">
            <div className="flex-item1">Hello, It's Me</div>
            <div className="flex-item2">Dhwanit Pandya</div>
            <div className="flex-item1">
              And I am a <span className="multiple-text"></span> 
            </div>
          </div>
          <div className="flex-items"></div>
        </div>
      </>
    );
}