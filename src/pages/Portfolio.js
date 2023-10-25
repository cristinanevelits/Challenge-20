import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "SVG Maker",
      image: "svg_maker.png",
      deployedLink: "",
      githubLink: "https://github.com/cristinanevelits/Challenge-10",
    },
    {
      title: "Note Taker",
      image: "note_taker.png",
      deployedLink: "https://take-some-notes-5976b74a23ec.herokuapp.com/",
      githubLink: "https://github.com/cristinanevelits/Challenge-11",
    },
    {
      title: "Employee Tracker",
      image: "employee_tracker.png",
      deployedLink: "",
      githubLink: "https://github.com/cristinanevelits/Challenge-12",
    },
    {
      title: "Text Editor",
      image: "text_editor.png",
      deployedLink: "https://a-little-text-editor-b45fb4d7d813.herokuapp.com/",
      githubLink: "https://github.com/cristinanevelits/Challenge-19",
    },
  ];

  return (
    <div>
      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={require(`../images/${project.image}`)}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
