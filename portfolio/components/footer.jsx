
import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h2>MyPortfolio</h2>

        <p>
          Building modern web applications and learning new technologies.
        </p>

        <div className="footerLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footerSocial">
          <a href="https://github.com/developer-javaAndweb/Projects" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <div className="footerBottom">
          <p>© 2026 MyPortfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
