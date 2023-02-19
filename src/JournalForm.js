import React, { useState } from 'react';

function JournalForm({ addEntry }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="content">Content:</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}


// To go into App
{/* <h1>Daily Journal</h1>
      <JournalForm addEntry={addEntry} />
      <JournalList entries={entries} /> */}

export default JournalForm;
