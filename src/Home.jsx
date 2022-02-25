import React from 'react'
import NavBar from './NavBar'
import {Container} from 'react-bootstrap'


function Home() {
  return (
    <div>
        <NavBar/>
        <Container>
        <h1>Home</h1>
        </Container>
    </div>
  )
}

export default Home