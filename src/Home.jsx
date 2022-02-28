import React, {useContext, useState} from 'react'
import NavBar from './NavBar'
import {Container, Button, Collapse} from 'react-bootstrap'
import ContactsContext from './context/ContactsContext'
import Header from './Header'
import {useEffect} from 'react'
import axios from 'axios'
import CollapseItem from './CollapseItem'



function Home() {
const {contacts, setContacts} = useContext(ContactsContext)


useEffect(()=>{
  const fectchContacts = async() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => setContacts(response.data))
    .catch(err => console.log(err.message))
  }

  fectchContacts()
}, [])

console.log(contacts)

  return (
    <div>
        <NavBar/>
        <Container>
        <Header/>
        {
          contacts.map(contact =>(
            <CollapseItem name={contact.name} 
                          email={contact.email}
                          phone={contact.phone}/>
            ))
        }
        </Container>
    </div>
  )
}

export default Home