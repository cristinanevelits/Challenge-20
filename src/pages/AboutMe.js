// AboutMe.js
import React from "react";
import myImage from "../images/my_avatar.jpeg";

function AboutMe() {
  return (
    <div>
      <section id="about-me">
        <h2>About Me</h2>
        <img src={myImage} alt="My Image" className="profile-image" />
        <p>
          My name is Cristina Nevelits and I am a passionate artist and
          developer who focuses mostly on design elements and aesthetics. Over
          the past several months, I have found a genuine interest for learning
          to code through my participation in the UC Berkeley Coding Bootcamp.
          Exploring the intricacies of programming languages and problem-solving
          has been an incredibly rewarding journey. Alongside my coding
          endeavors, I also thoroughly enjoy challenging my mind with games like
          Sudoku, which provide a different kind of mental stimulation and
          entertainment.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
