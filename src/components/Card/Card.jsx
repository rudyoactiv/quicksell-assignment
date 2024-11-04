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


const Card = ({ ticket, grouping }) => {

  console.log(ticket.status);

  const priorityImages = {
    0: priority0,
    1: priority1,
    2: priority2,
    3: priority3,
    4: priority4,
  };

  const statusImages = {
    "Todo": todo,
    "In progress": progress,
    "Backlog": backlog,
    "Done": done,
    "Canceled": canceled,
  };

  return (
    <div className="card">
      <div className="card-header">
        {ticket.id}
        {grouping != "User" && <img src={cardimg} alt="" />}
      </div>
      <div className="card-title">
        <img src={statusImages[ticket.status]} alt={`Priority ${ticket.status}`} />

        <p>{ticket.title}</p>
      </div>
      <div className="card-footer">
      {grouping !== "Priority" && (
          <img src={priorityImages[ticket.priority]} alt={`Priority ${ticket.priority}`} />
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
