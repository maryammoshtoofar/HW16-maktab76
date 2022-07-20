import React from "react";
import "./index.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

class ContactCard extends React.Component {
  render() {
    const { fname, familyName, email, relation } = this.props.contact;
    console.log(this.props.contact);

    return (
      <>
        <div className="card">
          <div className="cardInfo">
            <div className="card-titles">
              <div className="card__icons">
                <div className="icon__link">
                  <FaTrashAlt size={15} />
                </div>
                <div className="icon__link">
                  <FaEdit size={15} />
                </div>
              </div>
              <p className="card__title">
                {fname} {familyName}{" "}
              </p>
            </div>
            <h4 className="card__title">{relation} </h4>
            <h4 className="card__title">{email} </h4>
          </div>
        </div>
      </>
    );
  }
}
export default ContactCard;
