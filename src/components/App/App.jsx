import React, { Component } from 'react';
import { AppWrapper } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactTable from 'components/ContactTable';
import { nanoid } from 'nanoid';
import normalizePhoneNumber from '../../helpers/numberNormalize';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number: normalizePhoneNumber(number),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <AppWrapper>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        />
        <ContactTable
          filter={filter}
          onChangeFilter={this.changeFilter}
          getVisibleContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </AppWrapper>
    );
  }
}