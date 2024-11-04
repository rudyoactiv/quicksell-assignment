import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("grouping") || "Status"; // Default grouping
  });

  const [ordering, setOrdering] = useState(() => {
    return localStorage.getItem("ordering") || "Priority"; // Default ordering
  });

    useEffect(() => {
      localStorage.setItem("grouping", grouping);
    }, [grouping]);
  
    useEffect(() => {
      localStorage.setItem("ordering", ordering);
    }, [ordering]);


  return (
    <div>
      <Navbar 
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping} 
        setOrdering={setOrdering} 
      />
      <Home
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
};

export default App;
