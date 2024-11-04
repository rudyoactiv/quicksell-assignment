import React from "react";
import "./Column.css";
import Card from "../Card/Card"; // Import the Card component

import priority0 from "../../assets/icons/priority0.svg";
import priority1 from "../../assets/icons/priority1.svg";
import priority2 from "../../assets/icons/priority2.svg";
import priority3 from "../../assets/icons/priority3.svg";
import priority4 from "../../assets/icons/priority4.svg";

import backlog from "../../assets/icons/status/backlog.svg";
import todo from "../../assets/icons/status/todo.svg";
import progress from "../../assets/icons/status/progress.svg";
import done from "../../assets/icons/status/done.svg";
import canceled from "../../assets/icons/status/canceled.svg";

const Column = ({ grouping, title, tickets, ordering, users }) => {


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

  const colorList = [
    "#FF5733", // Red Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F1C40F", // Yellow
    "#9B59B6", // Purple
    "#2ECC71", // Emerald
    "#E67E22", // Carrot
    "#3498DB", // Peter River
    "#1ABC9C", // Turquoise
    "#34495E"  // Wet Asphalt
];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
};

  const priorityImages = {
    0: priority0,
    1: priority1,
    2: priority2,
    3: priority3,
    4: priority4,
  };

  const statusImages = {
    Todo: todo,
    "In progress": progress,
    Backlog: backlog,
    Done: done,
    Canceled: canceled,
  };

  const altPriority = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };

  const getInitials = (title) => {
    const words = title.split(" ");
    if (words.length === 0) return "";
    const firstInitial = words[0].charAt(0).toUpperCase();
    const secondInitial =
      words.length > 1 ? words[1].charAt(0).toUpperCase() : "";
    return firstInitial + secondInitial;
  };

  let isAvailable = false;
  if (grouping === "User") {
    const user = users.find((user) => user.name === title);
    isAvailable = user ? user.available : false; // Update value based on user availability
  }

  return (
    <div className="column">
      <div className="column-title">
        <div className="title-left">
          {grouping === "User" ? (
            <div
              className="initial"
              style={{ backgroundColor: getRandomColor() }}
            >
              {getInitials(title)}
              <div
              className={`availability-indicator ${isAvailable ? 'available' : 'not-available'}`}
            ></div>
            </div>
          ) : null}

          {grouping == "Status" && (
            <img src={statusImages[title]} alt={title} />
          )}
          { grouping == "Priority" && (
            <img src={priorityImages[title]} alt={title} />
          )}

          {grouping === "Priority" ? <p>{altPriority[title]}</p> : <p>{title}</p>}

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
            <Card key={ticket.id} ticket={ticket} grouping={grouping} users = {users}/> // Use the Card component for each ticket
          ))}
      </div>
    </div>
  );
};

export default Column;
