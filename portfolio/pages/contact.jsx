import React from "react";
import "../css/contact.css";

function Contact()
{
    return(
        <section className="contact" id="contact">
      <div className="contactheading">
        <p>CONTACT ME</p>
        <h2>Let's Connect</h2>
        <p className="contactdescription">
          Feel free to contact me for opportunities, projects, or collaboration.
        </p>
      </div>

      <div className="contactContainer">
        <div className="contactInfo">
          <h3>Get In Touch</h3>

          <p>
            <i className="fa-solid fa-envelope"></i>
            Email: chandanikumari49976@gmail.com
          </p>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            Location: India
          </p>
          <p>
            <i className="fa-brands fa-github"></i>
            GitHub: https://github.com/developer-javaAndweb/UdyamPath, https://github.com/developer-javaAndweb/Projects
          </p>
        </div>

        <form className="contactForm">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    )
}

export default Contact;