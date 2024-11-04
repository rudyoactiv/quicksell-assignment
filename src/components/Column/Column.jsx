import React from "react";
import "./Column.css";

const Column = ({ title, tickets, ordering }) => {
  // Function to sort tickets based on the ordering criteria
  const sortTickets = (tickets, ordering) => {
    return [...tickets].sort((a, b) => {
      if (ordering === "Priority") {
        return a.priority - b.priority; // Ascending order by priority
      } else if (ordering === "Title") {
        return a.title.localeCompare(b.title); // Alphabetical order by title
      }
      return 0; // No sorting if the ordering criteria is not recognized
    });
  };

  const sortedTickets = sortTickets(tickets, ordering); // Sort the tickets based on the ordering prop

  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <ul className="ticket-list">
        {sortedTickets.length > 0 ? (
          sortedTickets.map(ticket => (
            <li key={ticket.id} className="ticket-item">
              <h3 className="ticket-title">{ticket.title}</h3>
              <p className="ticket-details">
                <strong>Status:</strong> {ticket.status} | 
                <strong> Priority:</strong> {ticket.priority} | 
                <strong> Tags:</strong> {ticket.tag.join(", ")}
              </p>
            </li>
          ))
        ) : (
          <p className="no-tickets">No tickets available</p>
        )}
      </ul>
    </div>
  );
};

export default Column;
