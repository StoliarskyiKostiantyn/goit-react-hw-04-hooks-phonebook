import "./App.css";
import Phonebook from "./Components/Phonebook";
import React, { Component, useState } from "react";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import shortid from "shortid";
export default function App() {
  const [contacts, setContacts] = useState(
    { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
    { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", phone: "227-91-26" }
  );
  const [filter, setFilter] = useState("initialState");
  const forSubmiHandler = (data) => {
    const item = {
      id: shortid.generate(),
      ...data,
    };
    setContacts((prevState) => ({
      contacts: [...prevState.contacts, item],
    }));
  };
  const onFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContact = () => {
    const normalizaedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizaedFilter)
    );
  };
  const onDeleteContact = (id) => {
    setContacts((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  const visibleContact = getVisibleContact();
  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook onSubmit={forSubmiHandler}></Phonebook>
      <Filter value={filter} onChange={onFilterChange} />
      <h2>Contacts</h2>
      <ContactList
        contactitems={visibleContact}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </>
  );
}

// class oldApp extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
//     ],
//     filter: "",
//   };
//   forSubmiHandler = (data) => {
//     const item = {
//       id: shortid.generate(),
//       ...data,
//     };
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, item],
//     }));
//   };
//   onFilterChange = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   getVisibleContact = () => {
//     const { filter, contacts } = this.state;
//     const normalizaedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizaedFilter)
//     );
//   };
//   onDeleteContact = (id) => {
//     this.setState((prevState) => ({
//
