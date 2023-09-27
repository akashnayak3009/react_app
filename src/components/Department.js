// Department.js
import React, { useState } from 'react';
import './Department.css';

const Department = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Department 1', employees: [{ id: 101, name: 'Employee 1' },{ id: 102, name: 'Employee 2' }] },
    { id: 2, name: 'Department 2', employees: [{ id: 102, name: 'Employee 2' }, { id: 102, name: 'Employee 2' }] },
    { id: 3, name: 'Department 3', employees: [{ id: 103, name: 'Employee 3' }, { id: 102, name: 'Employee 2' }] },
    { id: 4, name: 'Department 4', employees: [{ id: 104, name: 'Employee 4' }, { id: 102, name: 'Employee 2' }] },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employeeId) => {
    setSelectedEmployee(employees.find((dept) => dept.employees.some((emp) => emp.id === employeeId)));
  };

  const handleDelete = (employeeId) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((dept) => ({
        ...dept,
        employees: dept.employees.filter((emp) => emp.id !== employeeId),
      }))
    );
  };

  return (
    <div className="department-container">
      <h2>Department Employees</h2>
      <div className="employee-cards">
        {employees.map((department) => (
          <div className="employee-card" key={department.id}>
            <h3>{department.name}</h3>
            <ul>
              {department.employees.map((employee) => (
                <li key={employee.id}>
                  {employee.name}
                  <button className="edit-button" onClick={() => handleEdit(employee.id)}>Edit✅</button>
                  <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete❌</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedEmployee && (
        <div className="modal">
          <h3>Edit Employee</h3>
          <p>Employee Name: {selectedEmployee.employees[0].name}</p>
          <button className="close-button" onClick={() => setSelectedEmployee(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Department;
