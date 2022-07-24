import React, { Component } from "react";
import ContactCard from "./Components/ContactCard";
import Form from "./Components/Form";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      showModal: false,
      fname: "",
      familyName: "",
      phone: "",
      relation: "",
      email: "",
    };
  }

  // Control Inputs

  handelChange = (e, validateFunction) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, validateFunction);
  };

  // ADD DELETE EDIT Functions
  addContact = (e) => {
    e.preventDefault();
    const { fname, familyName, phone, relation, email } = e.target.elements;
    const contact = {
      fname: fname.value,
      familyName: familyName.value,
      phone: phone.value,
      relation: relation.value,
      email: email.value,
      id: uuidv4(),
    };
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  DeleteCard = (id) => {
    console.log(id);
    const { contacts } = this.state;
    this.setState(
      {
        contacts: contacts.filter((contact) => contact.id !== id),
      },
      () => this.CloseModal()
    );
  };

  // EditContact = (id) => {
  //   const selectedContact = this.state.contacts.find(
  //     (contact) => contact.id === id
  //   );
  //   console.log(selectedContact);
  // };

  // Modal Functions

  OpenModal = () => {
    this.setState({ showModal: true });
  };
  CloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { fname, familyName, phone, relation, email, contacts, showModal } =
      this.state;
    return (
      <div className="container">
        <Form
          contacts={contacts}
          addContact={this.addContact}
          fname={fname}
          familyName={familyName}
          phone={phone}
          relation={relation}
          email={email}
          handelChange={this.handelChange}
        />
        <div className="contactsBody">
          {contacts.map((contact, i) => (
            <ContactCard
              key={i}
              contact={contact}
              DeleteCard={this.DeleteCard}
              OpenModal={this.OpenModal}
              CloseModal={this.CloseModal}
              showModal={showModal}
              EditContact={this.EditContact}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
