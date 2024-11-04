import React from "react";
import "./Column.css";

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <ul className="ticket-list">
        {tickets.map(ticket => (
          <li key={ticket.id} className="ticket-item">
            <h3 className="ticket-title">{ticket.title}</h3>
            <p className="ticket-details">
              <strong>Status:</strong> {ticket.status} | 
              <strong> Priority:</strong> {ticket.priority} |
              <strong> Tags:</strong> {ticket.tag.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
