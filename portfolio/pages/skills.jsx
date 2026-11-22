import React from "react";
import "../css/skills.css";

function Skills() {
  const skills = [
    { id: 1, name: "HTML", icon: "fa-brands fa-html5" },
    { id: 2, name: "CSS", icon: "fa-brands fa-css3-alt" },
    { id: 3, name: "JavaScript", icon: "fa-brands fa-js" },
    { id: 4, name: "React.js", icon: "fa-brands fa-react" },
    { id: 5, name: "Node.js", icon: "fa-brands fa-node-js" },
    { id: 6, name: "java", icon: "fa-brands fa-java" },
    { id: 7, name: "MongoDB", icon: "fa-solid fa-database" },
    { id: 8, name: "SQL", icon: "fa-solid fa-database" },
  ];

  return (
    <div>
      <section className="skills" id="skills">
        <div className="skillheading">
          <p>Technical Skills are:</p>
        </div>
        <div className="skillContainer">
          {skills.map((skills) => (
            <div className="skillCard" key={skills.id}>
              <i className={skills.icon}></i>
              <h3>{skills.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
