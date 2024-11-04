import React from "react";
import "./Column.css";
import Card from "../Card/Card"; // Import the Card component
import colimg from "../../assets/react.svg";

const Column = ({ grouping, title, tickets, ordering }) => {
  // Function to sort tickets based on the ordering criteria
  const sortTickets = (tickets, ordering) => {
    return [...tickets].sort((a, b) => {
      if (ordering === "Priority") {
        return a.priority - b.priority; // Ascending order by priority
      } else if (ordering === "Title") {
        return a.title.localeCompare(b.title); // Alphabetical order by title
      }
    });
  };

  const sortedTickets = sortTickets(tickets, ordering); // Sort the tickets based on the ordering prop

  return (
    <div className="column">
      <div className="column-title">
        <div className="title-left">
          <img src={colimg} alt="" />
          {title}
          <span>{tickets.length}</span>
          
        </div>
        <div className="title-buttons">
          <button>+</button>
          <button>⋯</button>
        </div>
      </div>
      <div className="ticket-list">
        {sortedTickets.length > 0 &&
          sortedTickets.map((ticket) => (
            <Card key={ticket.id} ticket={ticket} grouping={grouping}/> // Use the Card component for each ticket
          ))}
      </div>
    </div>
  );
};

export default Column;
