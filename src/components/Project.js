import React from "react";

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={deployedLink}>View Project</a>
      <a href={githubLink}>GitHub Repo</a>
    </div>
  );
}

export default Project;
