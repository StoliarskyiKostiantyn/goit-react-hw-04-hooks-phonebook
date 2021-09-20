import "./App.css";
import Phonebook from "./Components/Phonebook";
import React, { useState } from "react";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import shortid from "shortid";
export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
    { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
  ]);
  const [filterValue, setFilterValue] = useState("");
  const forSubmiHandler = (data) => {
    const item = {
      id: shortid.generate(),
      ...data,
    };
    setContacts((prevState) => [...prevState, item]);
  };
  const onFilterChange = (e) => {
    setFilterValue(e.currentTarget.value);
  };
  const getVisibleContact = () => {
    const normalizaedFilter = filterValue.toLowerCase();
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
      <Filter value={filterValue} onChange={onFilterChange} />
      <h2>Contacts</h2>
      <ContactList
        contactitems={visibleContact}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </>
  );
}
