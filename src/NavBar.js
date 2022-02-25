import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlusSquare, faQuestion } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


function NavBar() {
  const style = {
    textDecoration: 'none',
    marginLeft: 10,
    color: 'gray'
  }

  const onMouseOver = event =>{
    event.target.style.color = 'white'
  }

  const onMouseOut = event =>{
    event.target.style.color = 'gray'
  }
  
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Link to="/" style={style} onMouseOver = {onMouseOver} onMouseOut={onMouseOut}> <FontAwesomeIcon icon={faHome}/> Home</Link>
        <Link to="/add" style={style} onMouseOver = {onMouseOver} onMouseOut={onMouseOut}> <FontAwesomeIcon icon={faPlusSquare}/> Add</Link>
        <Link to="/about" style={style} onMouseOver = {onMouseOver} onMouseOut={onMouseOut}> <FontAwesomeIcon icon={faQuestion}/> About</Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default NavBar