import "../styles/landing.css";
import petals from "../assets/FallingPetals.gif";
import woman from "../assets/MeditatingWoman.png";
import man from "../assets/MeditatingMan.png";

import React, { useState, useEffect } from "react";

function Landing() {
  return (
    <div className="landingPage">
      <div className="landingBackground1">
        <img className="petals" src={petals}></img>
        <div className="textContainer">
          <h1 className="mainTitle">MINDFULL</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <a href="/menu">
            <button className="landingButton">Start the Journey</button>
          </a>
        </div>
      </div>

      <div className="landingBackground2">
        <div className="textContainer">
          <h1 className="mainTitle">MEDITATE</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <a href="/Meditations">
            <button className="landingButton">Start the Journey</button>
          </a>
        </div>
      </div>

      <div className="landingBackground3">
        <div className="textContainer">
          <h1 className="mainTitle">BREATHE</h1>
          <div className="bodyText">
            Feel the power of deep, mindful breathing. Calm the mind... calm the
            body... find the peace you crave with long, deep breathing.
            Visualise your breath with our breathing bubble to help find the
            CALM you deserve.
          </div>
          <a href="/Breathing">
            <button className="landingButton">Start the Journey</button>
          </a>
          <img className="meditatingMan" src={man}></img>
        </div>
      </div>

      <div className="landingBackground4">
        <div className="textContainer">
          <h1 className="mainTitle">QUOTES</h1>
          <div className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <a href="/Quotes">
            <button className="landingButton">Start the Journey</button>
          </a>
        </div>
      </div>

      <div className="landingBackground5">
        <div className="textContainer">
          <h1 className="mainTitle">FOCUS</h1>
          <div className="bodyText">
            Start a focus session now to help concentration and see your
            productivity rise.
            {/*  Make use of our pomodoro tool to aid productivity. */}
            {/*   Start a focus session for that uninterrupted concentration to aid productivity.
             */}
            With our pomodoro tool, plan short cycles of dedicated,
            uninterrupted time on a chosen task. See improvements in
            concentration and productivity with this simple, proven technique.
          </div>
          <a href="/Pomodoro">
            <button className="landingButton">Start the Journey</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
