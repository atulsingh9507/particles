import React from 'react';

const employees = [
  { id: 1, name: "vikash singh", address: "Bharthua" },
  { id: 2, name: "atul singh", address: "ziradei" },
  { id: 3, name: "nishu ma'am", address: "mumbai" }
];

function EmployeeList({ filterBy }) {
  let filteredEmployees = employees;

  if (filterBy === "id") {
    filteredEmployees = employees.map(emp => ({ id: emp.id }));
  } else if (filterBy === "name") {
    filteredEmployees = employees.map(emp => ({ name: emp.name }));
  } else if (filterBy === "address") {
    filteredEmployees = employees.map(emp => ({ address: emp.address }));
  }

  return (
    <div>
      <ul>
        {filteredEmployees.map((emp, index) => (
          <li key={index}>
            {emp.id && `ID: ${emp.id}`}
            {emp.name && `Name: ${emp.name}`}
            {emp.address && `Address: ${emp.address}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
