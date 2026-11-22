import React from "react";
import "../css/projects.css";

function Project() {
  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      description:
        "A shopping website with product listing, user authentication, and cart functionality. Creating reusable components with the help of React.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 2,
      name: "Campus Placement Management System",
      description:
        "A web-based application that manages student details, company information, placement drives, and interviews. Making different modules for students, admins, and company recruiters.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 3,
      name: "Hotel Reservation System",
      description:
        "A Java-based application to manage hotel reservations and customer records. Creating different classes and functions for rooms and customers, and managing available rooms using OOP concepts.",
      technologies: ["Java", "JDBC", "MySQL"],
    },
  ];

  return (
    <div>
      <section className="projects" id="projects">
        <div className="projectheading">
          <p>My Projects</p>
        </div>

        <div className="container">
          {projects.map((project) => (
            <div className="projectCard" key={project.id}>
              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
