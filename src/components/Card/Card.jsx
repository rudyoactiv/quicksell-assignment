import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styles
import cardimg from "../../assets/react.svg";

const Card = ({ ticket, grouping }) => {
  return (
    <div className="card">
      <div className="card-header">
        {ticket.id}
        {grouping != "User" && <img src={cardimg} alt="" />}
      </div>
      <div className="card-title">
        {grouping != "Status" && <img src={cardimg} alt="" />}
        <p>{ticket.title}</p>
      </div>
      <div className="card-footer">
        {grouping != "Priority" && <img src={cardimg} alt="" />}
        {/* {ticket.priority} */}
        <div className="tag">
          <div className="circle"></div>
          {ticket.tag.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default Card;
