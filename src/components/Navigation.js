import React from 'react'
import { Link } from 'react-router-dom';

function Navigation(props) {
  const {page, setPage} = props;

  return (
      <nav className='navbar'>
        <ul className='flex-row'>
        <Link to='/about'>
          <li className={`mx-5 ${page === 'about' && 'navActive'}`}>
            <h4>
              <a href="#about" onClick={() => setPage("about")}>About me</a>
            </h4>
          </li>
        </Link>
        </ul>
        {/* <Link to='/about'>About me</Link>  | */}
        <Link to='/project'>Project</Link>  |
        <Link to='/contact'>Contact</Link>  |
        <Link to='/resume'>Resume</Link>
      </nav>
  )
}

export default Navigation;