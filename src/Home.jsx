import React, {useContext} from 'react'
import NavBar from './NavBar'
import {Container} from 'react-bootstrap'
import ContactsContext from './context/ContactsContext'


function Home() {
//const {contacts, setContacts, updateContacts, deleteContact} = useContext(ContactsContext)
//console.log(contacts)
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