import React, { Component } from "react";
import ContactCard from "./Components/ContactCard";
import Form from "./Components/Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
  }

  addContact = (e) => {
    e.preventDefault();
    const { fname, familyName, phone, relation, email } = e.target.elements;
    const contact = {
      fname: fname.value,
      familyName: familyName.value,
      phone: phone.value,
      relation: relation.value,
      email: email.value,
    };
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  render() {
    return (
      <div className="container">
        <Form contacts={this.state.contacts} addContact={this.addContact} />
        <div className="contactsBody">
          {this.state.contacts.map((contact) => (
            <ContactCard contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
