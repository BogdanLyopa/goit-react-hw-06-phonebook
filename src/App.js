import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

import './styles.css';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contact => {
    const newContact = {
      id: uuidv4(),
      ...contact,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleRemoveContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const check = contacts.find(contact => {
      return contact.name === name;
    });
    if (check) {
      alert('Contact is already exist');
      return check;
    }
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <Form
          onSubmit={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        {this.state.contacts.length > 0 && (
          <Filter filter={filter} onChange={this.handleFilterChange} />
        )}
        <ContactsList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
