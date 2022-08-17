import React from 'react'
import { Link } from 'react-router-dom';

function Navigation(props) {
  const {page, setPage} = props;

  return (

      <nav className='navbar'>
        <ul className='flex-row'>
        <Link to='/portfolio'>
          <li className={`mx-5 ${page === 'about' && 'navActive'}`}>
            <h4>
              <a href="#about" onClick={() => setPage("about")}>About me</a>
            </h4>
          </li>
        </Link>
        <Link to='/projects'>
          <li className={`mx-5 ${page === 'projects' && 'navActive'}`}>
            <h4>
              <a href="/projects" onClick={() => setPage("projects")}>Projects</a>
            </h4>
          </li>
        </Link>
        <Link to='/contact'>
          <li className={`mx-5 ${page === 'contact' && 'navActive'}`}>
            <h4>
              <a href="/contact" onClick={() => setPage("contact")}>Contact</a>
            </h4>
          </li>
        </Link>
        <Link to='/resume'>
          <li className={`mx-5 ${page === 'resume' && 'navActive'}`}>
            <h4>
              <a href="/resume" onClick={() => setPage("resume")}>Resume</a>
            </h4>
          </li>
        </Link>
        </ul>
      </nav>
  )
}

export default Navigation;