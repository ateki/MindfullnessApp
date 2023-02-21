/**
 * Filename: PomodoroTimer.js
 * Contents:  
 *   With start and pause button functionality
 *   
 */

/* import Slider from '@mui/material/Slider';
// or */
/* import { Slider } from '@mui/material'; */

import Slider from "@material-ui/core/Slider";

import { useState, useEffect } from 'react';
//import '../styles/pomodoro.css';

/* import DigitalDisplay from './DigitalDisplay'; */


const styles = {

    wrapper: {
      display: 'flex',
      width: '100%',
      height:'100%'
  /*     top: '200px' */
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin: 'auto' 
    },

    /* CIRCLE FOR TIMER - transparent - flex item */
    timer_circle: {
      display: 'flex',    // container of text
      justifyContent: 'center',
      alignItems: 'center',
      
      borderRadius: '50%',     // circle
      backgroundColor: 'rgb(0, 0, 0, 0.1)',
      border: '5px solid white',
      color: 'white',
      height: '300px', 
      width: '300px',
      zIndex: '1'
    },

    /* CENTER TEXT IN CIRCLE */
    count_down: {
      fontFamily: 'FutoSansBold',
      fontSize: '50px',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      zIndex: '2'
    },
 
    /* CONTROL BUTTONS */
    ctrlBtn: {
      backgroundColor: '#F08A9B',
      fontFamily: 'FutoSansBold',
      /* fontSize: , */
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px',
      width: '50%',
      cursor: 'pointer'
    },

    ctrlBtnHidden: {
      visibility: 'hidden',
      backgroundColor: '#F08A9B',
      fontFamily: 'FutoSansBold',
      /* fontSize: , */
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px',
      width: '50%',
      cursor: 'pointer'
    }
};


/* Slider settings
const TIME_DEFAULT = 25;
const TIME_MIN = 5;
const TIME_MAX = 60;

const marks = [
  {
    value: 5,
    label: '5 min',
  },
  {
    value: 10,
    label: '10 min',
  },
  {
    value: 20,
    label: '20 min',
  },
  {
    value: 60,
    label: '60 min',
  },
];
 */



/**
 * 
 * @param {*} props 
 * @returns 
 */
 //TODO Slider added and pass time set to countdown
// TODO Attempted to have DigitalTime Display but ggetting error too many re-renders.
function PomodoroTimerOnStart(props) {


    const TEST_DURATION = 62; // 5 secs
    console.log(`TEST_DURATION = ${TEST_DURATION}`);
    
    // Time remaining 
    /*  const [timeLeft, setTimeLeft] = useState(durationInMins * 60); */
    const [timeLeft, setTimeLeft] = useState(TEST_DURATION);

    /*       // Initial starting time
      const [durationInMins, setDurationInMins] = useState(2);                   // time in minutes
      const [durationInMs, setDurationInMs] = useState(60000 * durationInMins);  // time in milliseconds
       */

    /*   // NO LONGER USING THESE 3....
      const [minsLeft, setMinsLeft] = useState(durationInMins);  
      const [secsLeft, setSecsLeft] = useState(2);  
      const [countdownDisplay, setCountdownDisplay] = useState(null);   */

      const [isTimerRunning, setIsTimerRunning]= useState(false); // rename isPaused
      /* const [intervalId, setIntervalId]= useState();  */// for now auto start


      const startTimer = () => {
        console.log(`startTimer`);
        setIsTimerRunning(true);

      }
      const pauseTimer = () => {
        console.log(`pauseTimer`);
        setIsTimerRunning(false);

      }
      const resetTimer = () => {
        console.log(`resetTimer`);
        setIsTimerRunning(false);
        setTimeLeft(TEST_DURATION);

      }


      /**
       * Returns string representing time in format: mm : ss
       * Paddiing out any single digit ensuring mins or secs passed in are always displayed as 2 digits
       * ( 01 : 00,   12 : 03)
       * Ensures text stays on same position
       * @param {*} mins 
       * @param {*} secs 
       * @returns 
       */
      const formatTimeLeft = (mins, secs) => {
        var mm = String(mins).padStart(2,'0');
        var ss = String(secs).padStart(2,'0');
        console.log(`formatTimeLeft returns ${mm} : ${ss}`);

        return(`${mm} : ${ss}`);
      } 


        const getDisplayTime = (time) => {
          const mins = Math.floor(time / 60);
          const secs = time % 60; 
          return formatTimeLeft(mins, secs);
          //return `${mins < 10 ? '0' + min : min} : ${secs < 10 ? '0' + secs : secs}`;
        }
      
      





      useEffect(() => {

        // note to self:  use effect should only ever return a function or undefined

        // Runs each time change to the isTimerRunning boolean - triggered by button press
        console.log(`first render ${timeLeft}  isTimerRunning = ${isTimerRunning}`);

        
        if (isTimerRunning && timeLeft > 0) { 

        
            // Decrement from time every second if timer running, continuesly run below code in setINterval, every sec:
            const intervalId = setInterval(() => {
                  console.log(`body of setInterval executing ${isTimerRunning}`); // only executes once
                  setTimeLeft(timeLeft => timeLeft -1);
            
            }, 1000); //  every sec update display
            
            // When decide to set this to running, give clean up function
            // Cleanup happens when either useEffect runs again OR component is about to be unmounted!!! == similar to componentWillUnmount in class based components
            // ... it issolates react component from side effects!!
            return () => clearInterval(intervalId);

        } else if (timeLeft===0) {
          setIsTimerRunning(false);
        }

        return undefined;
      
    }, [isTimerRunning, timeLeft ]);     // Only run useEffect on button click - disable start /pause button when pressed.



    return (
      <div className='wrapper' style={styles.wrapper}>
         <div className='container' style={styles.container}>
            <div className="timer_circle" style={styles.timer_circle}>
                <p className="count_down" style={styles.count_down}>{getDisplayTime(timeLeft)}</p> 
            </div>


            {/* Display ctrl buttons depending on whether timer is running */}
            {
              isTimerRunning
              ? 
              (
                  <input type="button" value="Pause" style={styles.ctrlBtn} disabled={!isTimerRunning} 
                      onClick={() => pauseTimer()
                  }/>
              )
              : 
              (
                  <input type="button" value="Start" style={styles.ctrlBtn} disabled={isTimerRunning} 
                      onClick={() =>  startTimer() 
                  }/>  
              )
            }

            {/* TODO: show reset button only when timer not running and not at start ie: timesLeft < timer duration */}
            {
            /*   !isTimerRunning && (timeLeft < TEST_DURATION}) */
              (!isTimerRunning && timeLeft < TEST_DURATION)
              ? 
              (
                  <input type="button" value="Reset" style={styles.ctrlBtn} 
                      onClick={() => resetTimer()
                  }/>
              )
              : 
             
              (
                <input type="button" value="HiddenReset" style={styles.ctrlBtnHidden} 
                    onClick={() => resetTimer()
                }/>
            )
            }     
        </div> 
      </div>
    )
  }


export default PomodoroTimerOnStart;