import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav bg="light" variant="light">
        <Container>
        <h1>
        <a href="/about">Hien Mai</a>
        </h1>
        <Link to='/about'>About me</Link>  |
        <Link to='/project'>Project</Link>  |
        <Link to='/contact'>Contact</Link>  |
        <Link to='/resume'>Resume</Link>
        </Container>
      </nav>
    </>
      // <>
      //   <Navbar bg="light" variant="light">
      //     <Container>
      //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //       <Nav className="me-auto">
      //         <Nav.Link href="#home">Home</Nav.Link>
      //         <Nav.Link href="#features">Features</Nav.Link>
      //         <Nav.Link href="#pricing">Pricing</Nav.Link>
      //       </Nav>
      //     </Container>
      //   </Navbar>
      // </>
  )
}

export default Navigation;