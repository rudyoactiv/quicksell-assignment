import React from "react";
import "./Home.css";
import Column from "../components/Column/Column";
import { useState, useEffect } from "react";

const Home = ({ grouping, ordering }) => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const priorityList = [0, 4, 3, 2, 1];
  const statusList = ["Backlog", "Todo", "In progress", "Done", "Canceled"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();

        // Store users and tickets in state
        setUsers(data.users);
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderColumns = () => {
    switch (grouping) {
      case "Status":
        return statusList.map((status) => {
          const filteredTickets = tickets.filter(
            (ticket) => ticket.status === status
          );
          return (
            <Column
              status={status}
              grouping={grouping}
              ordering={ordering}
              key={status}
              title={status}
              tickets={filteredTickets}
            />
          );
        });

      case "User":
        return users.map((user) => {
          const filteredTickets = tickets.filter(
            (ticket) => ticket.userId === user.id
          );
          return (
            <Column
              grouping={grouping}
              ordering={ordering}
              key={user.id}
              title={user.name}
              tickets={filteredTickets}
            />
          );
        });

      case "Priority":
        return priorityList.map((priority) => {
          const filteredTickets = tickets.filter(
            (ticket) => ticket.priority === priority
          );
          return (
            <Column
              grouping={grouping}
              ordering={ordering}
              key={priority}
              title={priority}
              tickets={filteredTickets}
            />
          );
        });

      default:
        return null;
    }
  };

  return (
    <div className="home">
      {renderColumns()}
    </div>
  );
};

export default Home;
