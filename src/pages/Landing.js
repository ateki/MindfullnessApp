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
            eiusmod<br></br>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br></br>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea<br></br>
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate<br></br>
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
            eiusmod<br></br>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br></br>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea<br></br>
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate<br></br>
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <button className="landingButton">Start the Journey</button>
        </div>
      </div>

      <div className="landingBackground3">
        <div className="textContainer">
          <h1 className="mainTitle">BREATHE</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod<br></br>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br></br>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea<br></br>
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate<br></br>
            velit esse cillum dolore eu fugiat nulla pariatur.
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
            eiusmod<br></br>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br></br>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea<br></br>
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate<br></br>
            velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <button className="landingButton">Start the Journey</button>
        </div>
      </div>



    </div>
  );
}

export default Landing;
