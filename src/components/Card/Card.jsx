import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styles
import cardimg from "../../assets/react.svg";

const Card = ({ ticket, grouping }) => {
  return (
    <div className="card">
      <div className="card-header">
        {ticket.id}
        <img src={cardimg} alt="" />
      </div>
      <div className="card-title">
        {/* {grouping != "User" && <img src={cardimg} alt="" />} */}
        <img src={cardimg} alt="" />
        {/* {ticket.status} <br />  add this later*/}
        <p>{ticket.title}</p>
      </div>
      <div className="card-footer">
        <img src={cardimg} alt="" />
        {/* {ticket.priority} */}
        {ticket.tag.join(", ")}
      </div>
    </div>
  );
};

export default Card;
