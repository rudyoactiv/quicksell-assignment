import React from "react";
import "./Column.css";
import Card from "../Card/Card";

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


  // sorting function
  const sortTickets = (tickets, ordering) => {
    return [...tickets].sort((a, b) => {
      if (ordering === "Priority") {
        return a.priority - b.priority; // priority
      } else if (ordering === "Title") {
        return a.title.localeCompare(b.title); // title
      }
    });
  };

  const sortedTickets = sortTickets(tickets, ordering);

  // generating random colors for user profiles
  const colorList = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#2ECC71",
    "#E67E22",
    "#1ABC9C",
];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
};


// load priority images
  const priorityImages = {
    0: priority0,
    1: priority1,
    2: priority2,
    3: priority3,
    4: priority4,
  };

// load status images  
  const statusImages = {
    Todo: todo,
    "In progress": progress,
    Backlog: backlog,
    Done: done,
    Canceled: canceled,
  };

// map priority number to string  
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
  };  // build user picture from name

  let isAvailable = false;
  if (grouping === "User") {
    const user = users.find((user) => user.name === title);
    isAvailable = user ? user.available : false; // Update value based on user availability
  } // user availability dot

  return (
    <div className="column">
      <div className="column-title">
        <div className="title-left">



          {/* show user image if grouping user */}

          {
            grouping === "User" ? (
              <div
                className="initial"
                style={{ backgroundColor: getRandomColor() }}
              >
                {getInitials(title)}
                <div
                  className={`availability-indicator ${
                    isAvailable ? "available" : "not-available"
                  }`}
                ></div>
              </div>
            ) : null
          }


          {/* show status image if grouping status */}

          {grouping == "Status" && (
            <img src={statusImages[title]} alt={title} />
          )}


          {/* show priority image if grouping priority */}

          {grouping == "Priority" && (
            <img src={priorityImages[title]} alt={title} />
          )}



          {/* show mapped values only if priority */}

          {grouping === "Priority" ? (
            <p>{altPriority[title]}</p>
          ) : (
            <p>{title}</p>
          )}

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
            <Card
              key={ticket.id}
              ticket={ticket}
              grouping={grouping}
              users={users}
            /> // use Card component for each
          ))}
      </div>
    </div>
  );
};

export default Column;
