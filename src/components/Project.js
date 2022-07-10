import React, { useState } from 'react';

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
    <div>
      {projects.map(project => (
        <div>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Project;