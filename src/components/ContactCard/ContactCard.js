import React from "react";
import "./ContactCard.css";

const ContactCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Phone:</strong> {props.phone}
        </li>
        <li>
          <strong>Email:</strong> {props.email}
        </li>
      </ul>
    </div>
  </div>
);

export default ContactCard;
