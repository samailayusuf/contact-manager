import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import {Container} from 'react-bootstrap'

function About() {
  return (
      <>
        <NavBar/>
        <Container>
        <h2>About</h2>
        <p>This is an app created to manage contacts. It could be seen and used as a backup for your contacts....Version 1.0.0</p>
        </Container>
        <Footer/>
      </>
    
  )
}

export default About