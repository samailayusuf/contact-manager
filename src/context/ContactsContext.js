import React, {useState, createContext} from 'react'
//import axios from 'axios'

const ContactsContext = createContext();

export const ContactsProvider = (props) => {
    const [contacts, setContacts] = useState([{name:'Yusuf samaila', email:'yusuf7samaila@gmail.com', phone:'070111'}])

    const updateContacts = (id) => {
        //const newContacts = contacts.filter(contact => contact)
    }

    const deleteContact = (id) => {
        //contacts.map(contact = contact.id !== id)
    }

    return (
        <ContactsContext.Provider value={{contacts, setContacts, updateContacts, deleteContact}}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactsContext;