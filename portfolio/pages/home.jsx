import React from "react";
import "../css/home.css";

function Home() {
  return (
    <div>
      <div className="home" id="home">
        <p>welcome , this is my portfolio</p>

        <h2>
          Hello, 
          I am <span>Chandani Kumari</span>
        </h2>
        <h3>Computer Engineering Student</h3>
        <p className="description">
          I have good knowledge of programming lanuguage html, css ,javaScript,
          React, Node JS, basic Java and and database like MongoDB using NoSQL.
          I am passionate about building modern web application using these
          technology.
        </p>

        <div>
          <button className="projectbtn">view my work</button>
          <button className="contactbtn">Conatct Me</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
