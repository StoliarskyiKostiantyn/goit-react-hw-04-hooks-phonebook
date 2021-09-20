import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Phonebook({ onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName("");
    setPhone("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          Phone
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func,
};
