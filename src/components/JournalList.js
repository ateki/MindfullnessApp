import React, { useState } from 'react';
import "../styles/journal.css";

function JournalList({ entries }) {

const [selectedEntry, setSelectedEntry] = useState(null);

const handleEntrySelection = (entry) => {
setSelectedEntry(entry);
}

return (
<div className='journalListContainer'>
<select className='optionButton' onChange={(e) => handleEntrySelection(e.target.value)}>
<option  value="">Select an Entry</option>
{entries.map((entry, index) => (
<option key={index} value={entry.title}>{entry.title}</option>
))}
</select>
{selectedEntry && (
<div>
<h3 className='prevTitle'>{selectedEntry}</h3>
<p className='prevContent'>{entries.find(entry => entry.title === selectedEntry).content}</p>
</div>
)}
</div>
);
}

export default JournalList;