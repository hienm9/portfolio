import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'Recipe Search',
      type: 'Front End App',
      description: 'A front end project that allows user to search recipes and shows ingredients and instructions on how to make the recipe',
      href: 'https://drspookyfox.github.io/RecipeSearch/',
      github: 'https://github.com/hienm9/RecipeSearch'
    },
    
  ]
  
    
  );
  return(
    <div>
      {projects.map(project=>(
        <div>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Project;