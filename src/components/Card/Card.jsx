import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styles
import cardimg from "../../assets/react.svg";

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

const Card = ({ ticket, grouping, users }) => {




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


console.log(users);


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


  const getInitials = (word) => {
    const words = word.split(" ");
    if (words.length === 0) return "";
    const firstInitial = words[0].charAt(0).toUpperCase();
    const secondInitial =
      words.length > 1 ? words[1].charAt(0).toUpperCase() : "";
    return firstInitial + secondInitial;
  };

  const user = users.find((user) => user.id === ticket.userId);
  const isAvailable = user ? user.available : false;

  return (
    <div className="card">
      <div className="card-header">
        {ticket.id}
        {grouping !== "User" && (
          <div
            className="initial"
            style={{ backgroundColor: getRandomColor() }}
          >
            {getInitials(user ? user.name : "Unknown User")}
            <div
              className={`availability-indicator ${isAvailable ? 'available' : 'not-available'}`}
            ></div>
          </div>
        )}
      </div>
      <div className="card-title">
        <img
          src={statusImages[ticket.status]}
          alt={`Priority ${ticket.status}`}
        />

        <p>{ticket.title}</p>
      </div>
      <div className="card-footer">
        {grouping !== "Priority" && (
          <img
            src={priorityImages[ticket.priority]}
            alt={`Priority ${ticket.priority}`}
          />
        )}
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
