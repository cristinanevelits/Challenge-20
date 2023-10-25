import React from "react";

function Resume() {
  return (
    <div>
      <section id="resume">
        <h2>Resume</h2>
        <p>
          Download my resume{" "}
          <a href="/Resume_Cristina_Nevelits.pdf" download>
          HERE
        </a>
          .
        </p>
        <h3>Proficiencies</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
