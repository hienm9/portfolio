import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'

function Resume() {
    return (
        <section className="resume">
          <h2>Resume</h2>
          <p>Download my 
            {/* <a href={require('/../assets/HienProfile.pdf')} download> Resume</a> */}
            <a href={require(`../assets/HienProfile.pdf`)} download> Resume</a>
          </p>
          <h4>Front-End Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>responsive design</li>
          </ul>
          <h4>Back-End Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MERN stack</li>
          </ul>
        </section>
      );
}

export default Resume;