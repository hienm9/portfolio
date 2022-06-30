import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faStackOverFlow } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function Footer() {
    return (
        <>
        <footer className='footer'>
       
        <a href="https://github.com/hienm9"><FontAwesomeIcon icon={"fa-brands fa-github"} /> </a>
        {/* <a href="https://www.linkedin.com/in/hien-mai-a765a3126/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://stackoverflow.com/users/18013810/user18013810"><FontAwesomeIcon icon={faStackOverFlow} /></a> */}
        </footer>
        </>
    )
}

export default Footer;