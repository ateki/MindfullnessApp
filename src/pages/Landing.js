import "../styles/landing.css";
import petals from "../assets/FallingPetals.gif";
import woman from "../assets/MeditatingWoman.png";
import man from "../assets/MeditatingMan.png";

import React, { useState, useEffect } from 'react';
import JournalForm from '../JournalForm';
import JournalList from '../JournalList';


function Landing() {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('entries'));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };


  return (
    <div className="landingPage">
      <div className="landingBackground1">
        <img className="petals" src={petals}></img>
        <div className="textContainer">
          <h1 className="mainTitle">MINDFULL</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <button className="landingButton">Start the Journey</button>
        </div>
      </div>

      <div className="landingBackground2">
        <div className="textContainer">
          <h1 className="mainTitle">MEDITATE</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <button className="landingButton">Start the Journey</button>
        </div>
      </div>

      <div className="landingBackground3">
        <div className="textContainer">
          <h1 className="mainTitle">BREATHE</h1>
          <div className="bodyText">
            Feel the power of deep, mindful breathing.   Calm the mind... calm the body...
            find the peace you crave with long deep breathing.
            Visualise you breath with our breathing bubble to help find the CALM you deserve.
            </div>
          <button className="landingButton">Start the Journey</button>
          <img className="meditatingMan" src={man}></img>
        </div>
      </div>

      <div className="landingBackground4">
        <div className="textContainer">
          <h1 className="mainTitle">QUOTES</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <button className="landingButton">Start the Journey</button>
        </div>
      </div>

      <h1>Daily Journal</h1>
      <JournalForm addEntry={addEntry} />
      <JournalList entries={entries} /> 

    </div>
  );
}

export default Landing;
