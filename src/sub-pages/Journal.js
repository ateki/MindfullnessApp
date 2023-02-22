import JournalForm from "../components/JournalForm";
import JournalList from "../components/JournalList";
import React, { useState, useEffect } from "react";
import "../styles/journal.css"

function Journal() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="journalContainer">
        <h1 className="journalTitle">Journal</h1>
      <JournalForm addEntry={addEntry} />
      <JournalList entries={entries} />

      
    </div>
  );
}

export default Journal;
