import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <section className='projects'>
      <h2>Projects</h2>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div>
        {projects.map(project => (
          <div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project;