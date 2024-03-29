// StudentForm.js

import React, { useState } from 'react';
import './StudentForm.css'; 

const StudentForm = ({ onSubmit, electives }) => {
  const [name, setName] = useState('');
  const [selectedElective, setSelectedElective] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, elective: selectedElective });
    setName('');
    setSelectedElective('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        value={selectedElective}
        onChange={(e) => setSelectedElective(e.target.value)}
        required
      >
        <option value="">Select Elective</option>
        {electives.map((elective) => (
          <option key={elective.id} value={elective.name}>{elective.name}</option>
        ))}
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentForm;
