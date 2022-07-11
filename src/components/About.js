import React from 'react';
import avatar from '../assets/images/HienAvatar.png';
function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="flex-row">
      <img src={avatar} style={{ width: "10%" }} alt="Hien avatar" />
        <p>
        As a problem solver who loves facing challenges and puts quality first, 
        I'm excited to be at the deployment phase of my career as a web developer.  <br /><br />
        I am currently earning a full stack web development certificate from 
        The Ohio State University Coding Bootcamp, where I have developed skills in MERN Stack and SQL servers.
        <br /><br />
        I'm passionate about my work, and love to be on a team that questions possibilities 
        that will make a difference.
        </p>
      </div>
    </section>
  );
}

export default About;
