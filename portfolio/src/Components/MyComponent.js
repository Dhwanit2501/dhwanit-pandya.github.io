import React, { useEffect } from "react";
import './MyComponent.css';
const MyComponent = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.0.48/build/spline-viewer.js";

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

    return (
      <>
        <div className="spline">
          <h1>DHwanit</h1>
          {/* Your component JSX */}
          {/* Ensure to include the <spline-viewer> component in your JSX */}
          {/* Make sure to adjust the url prop accordingly */}
          <spline-viewer url="https://prod.spline.design/6RMtuzahayfgzdly/scene.splinecode"></spline-viewer>
        </div>
        <h1>DHwanit</h1>
        <h1>DHwanit</h1>
        <h1>DHwanit</h1>
        <h1>DHwanit</h1>
        <h1>DHwanit</h1>
      </>
    );
};

export default MyComponent;
