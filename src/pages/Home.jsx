import React from 'react';
import './Home.css';

const Home = ({ tickets, grouping, ordering }) => {
  // You can sort and group tickets here based on grouping and ordering

  return (
    <div className='home-page'>
      <h1>Home</h1>
      <p>Grouping by: {grouping}</p>
      <p>Ordering by: {ordering}</p>
      {/* Render tickets here */}
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>Status: {ticket.status}</p>
            <p>Priority: {ticket.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
