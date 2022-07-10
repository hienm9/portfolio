import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  const [projects] = useState([

    {
      name: 'Coding Compass',
      type: 'Full Stack App',
      description: 'This is a wesite that is designed to allow you to look up potential Coding bootcamps to compare them with other ones to see which will be the best for you.',
      href: 'https://coding-compass.herokuapp.com/',
      github: 'https://github.com/hienm9/Coding-Compass'
    },
    {
      name: 'Budget Tracker',
      type: 'Front End App',
      description: 'An application that allows user to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline the total should be updated when they are brought back online.',
      href: 'https://hien-budget-tracker.herokuapp.com/',
      github: 'https://github.com/hienm9/Budget-Tracker'
    },
    {
      name: 'Recipe Search',
      type: 'Front End App',
      description: 'A front end project that allows user to search recipes and shows ingredients and instructions on how to make the recipe',
      href: 'https://drspookyfox.github.io/RecipeSearch/',
      github: 'https://github.com/hienm9/RecipeSearch'
    },
    {
      name: 'Weather Dashboard',
      type: 'Front End App',
      description: 'This is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS using a third-party APIs called https://openweathermap.org/api/one-call-api to retrieve weather data for cities.',
      href: 'https://hienm9.github.io/Challenge-06-WeatherDashboard-ServerSide-APIs/',
      github: 'https://github.com/hienm9/Challenge-06-WeatherDashboard-ServerSide-APIs'
    },
    {
      name: 'Portfolio',
      type: 'React App',
      description: 'My portfolio app using React technology',
      href: 'https://hienm9.github.io/porfolio',
      github: 'https://github.com/hienm9/porfolio'
    },
    {
      name: 'Note Taker',
      type: 'Front End App',
      description: 'Note Taker is an application can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.',
      href: 'https://hien-notetaker.herokuapp.com/',
      github: 'https://github.com/hienm9/Note-Taker'
    },
  ]

  );
  return (
    <section className='projects '>
      <h2>Projects</h2>
      <Container>
        <Row xs={2} md={4} className="g-4 flex-row col-lg-2 col-sm-4">
          {projects.map((project) => (
            <Col key={project.name}>
              <Card>
                
                <Card.Img variant="top" 
                  src={require(`../assets/images/projects/${project.name}.png`)} 
                  alt={project.description} 
                  />
                <Card.ImgOverlay className="overlay-card">
                  <Card.Title className="overlay-title">
                    <a className="overlay-link" href={project.href}>{project.name}</a>
                    <a className="overlay-github" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
                  </Card.Title>
                  <Card.Text className='overlay-text'>{project.type} - {project.description}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
     
    </section>
  )
}

export default Project;