import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  const [grouping, setGrouping] = useState("By Status");  // Default grouping
  const [ordering, setOrdering] = useState("Priority");   // Default ordering
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar 
        setGrouping={setGrouping} 
        setOrdering={setOrdering} 
      />
      <Home 
        tickets={tickets} 
        grouping={grouping} 
        ordering={ordering} 
      />
    </div>
  );
};

export default App;
