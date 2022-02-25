import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'


function Footer() {
    const style={
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={style}>
    
        <p style={{color:'white', textAlign:'center', }}>  &copy; {new Date().getFullYear()} Yusuf Samaila</p>
    
   </Navbar>
  )
}

export default Footer