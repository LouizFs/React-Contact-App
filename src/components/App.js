import React, { useState, useEffect } from  "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  let count = 0;
  const [contacts, setContacts] = useState([]); 
  const addContactHandler = (contact) => {
    if(contacts.length > 0)
      count = contacts[contacts.length - 1].id + 1;
    setContacts([...contacts, {id: count, ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=> {
      return contact.id !== id;
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
    if (retriveContacts) setContacts(retriveContacts); 
  }, [] )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts] )
  

  return ( 
    <div className="ui container">
      <Router>
        <Header style={{marginBottom: "30%"}} />
        <br></br><br></br>
        <Switch>
          <Route path="/add" render={(props) => <AddContact {...props} addContactHandler={addContactHandler} /> } />
          <Route path="/" exact render={(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)}  />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
