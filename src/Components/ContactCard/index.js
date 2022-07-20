import React from "react";
import "./index.css";

class ContactCard extends React.Component {
  render() {
    const { fname } = this.props.contact;

    return (
      <>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <p className="card__exit">
            <i className="fas fa-times"></i>
          </p>
          <h2 className="card__title">{fname} </h2>
          <p className="card__apply">
            <a className="card__link" href="#">
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </>
    );
  }
}
export default ContactCard;
