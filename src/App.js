import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  const [filterBy, setFilterBy] = useState("");

  return (
    <div className="App">
      <h1>Employee List</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilterBy("")}>All</button>
        <button onClick={() => setFilterBy("id")}>Filter by ID</button>
        <button onClick={() => setFilterBy("name")}>Filter by Name</button>
        <button onClick={() => setFilterBy("address")}>Filter by Address</button>
      </div>
      <EmployeeList filterBy={filterBy} />
    </div>
  );
}

export default App;
