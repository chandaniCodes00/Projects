import React from "react";
import "../css/about.css";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div>
          <p>KNOW ABOUT ME</p>
        </div>

        <div className="content">
          <div className="text">
            <h4>I am Chandani Kumari</h4>
            <p>
              I am a Computer Engineering student with a strong interest in web
              development . I am excited to learn new technology and building
              practical applications.
            </p>

            <p>
              I have knowledge of HTML, CSS, JavaScript, React, Node.js, Basic
              Java and MongoDB.
            </p>

            <p>
              {" "}
              My goal is to become a good and skilled software developer and
              contribute myself to building innovative applications
            </p>
          </div>

          <div className="about-details">
            <div>
              <h3>8.87</h3>
              <h3>CGPA</h3>
            </div>
            <div>
              <h3>7th</h3>
              <p>Semester</p>
            </div>

            <div>
              <h3>3+ projects</h3>
            </div>
            <div>
              <h3>5+ technologies Learned</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
