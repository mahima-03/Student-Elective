import React from 'react';

const ElectiveList = ({ electives }) => {
  return (
    <div>
      <h2>Electives</h2>
      <ul>
        {electives.map((elective) => (
          <li key={elective.id}>{elective.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElectiveList;
