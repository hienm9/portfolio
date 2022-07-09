import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow  } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <>
        <footer className='footer'>
        <a href="https://github.com/hienm9"><FontAwesomeIcon icon={faGithub} size='3x'/></a>
        <a href="https://www.linkedin.com/in/hien-mai-a765a3126/"><FontAwesomeIcon icon={faLinkedin} size='3x'/></a>
        <a href="https://stackoverflow.com/users/18013810/user18013810"><FontAwesomeIcon icon={faStackOverflow} size='3x'/></a>
        </footer>
        </>

    );
}

export default Footer;