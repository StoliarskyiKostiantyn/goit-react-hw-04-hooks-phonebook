import React, { Component } from "react";
import PropTypes from "prop-types";
class ContactList extends Component {
  render() {
    return (
      <>
        <div>
          <ul>
            {this.props.contactitems.map((contactitem) => (
              <li key={contactitem.id}>
                <span>
                  Name:{contactitem.name} Phone:{contactitem.phone}
                </span>
                <button
                  type="button"
                  onClick={() => this.props.onDeleteContact(contactitem.id)}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
ContactList.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
export default ContactList;
