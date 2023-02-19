import React from 'react';

function JournalList({ entries }) {
  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index}>
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
        </div>
      ))}
    </div>
  );
}

export default JournalList;
