import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  const [grouping, setGrouping] = useState("Status"); // Default grouping
  const [ordering, setOrdering] = useState("Priority"); // Default ordering

  return (
    <div>
      <Navbar setGrouping={setGrouping} setOrdering={setOrdering} />
      <Home
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
};

export default App;
