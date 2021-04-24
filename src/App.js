import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

import './styles.css';
import { connect } from 'react-redux';
class App extends Component {
  state = {
    // contacts: [],
    // filter: '',
  };

  // handleAddContact = contact => {
  //   const newContact = {
  //     id: uuidv4(),
  //     ...contact,
  //   };
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, newContact],
  //   }));
  // };

  // handleRemoveContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  // handleCheckUniqueContact = name => {
  //   const { contacts } = this.state;
  //   const check = contacts.find(contact => {
  //     return contact.name === name;
  //   });
  //   if (check) {
  //     alert('Contact is already exist');
  //     return check;
  //   }
  // };

  // handleFilterChange = filter => {
  //   this.setState({ filter });
  // };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      // this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  render() {
    return (
      <div className="app">
        <h2>Phonebook</h2>
        <Form />
        {this.props.contacts.length > 0 && <Filter />}
        <ContactsList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(App);
