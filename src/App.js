// App.js

import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import ElectiveList from './components/ElectiveList';
import electivesData from './data/electives';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleFormSubmit = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1>Elective Registration</h1>
      <StudentForm onSubmit={handleFormSubmit} electives={electivesData} />
      <ElectiveList electives={electivesData} />
      {/* Render registered students */}
      <div>
        <h2>Registered Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.elective}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

