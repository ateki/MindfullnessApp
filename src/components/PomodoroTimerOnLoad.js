/**
 * Filename: PomodoroTimer.js
 * Contents:  
 * Used to start Pomodoro timer on page load.
 * 
 */

import Slider from "@material-ui/core/Slider";

import { useState, useEffect } from 'react';
import '../styles/pomodoro.css';

import DigitalDisplay from './DigitalDisplay';


const styles = {

  wrapper: {
    display: 'flex',
    width: '100%',
    height:'100%',
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


 
    /* CIRCLE FOR TIMER - transparent*/
    // flex item
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
    }
 
/*    
    startBtn: {
      backgroundColor: '#F08A9B',
      fontFamily: 'FutoSansBold',
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px',
      width: '50%'
    } */

};


// or rep in millisecs?
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


/**
 * 
 * @param {*} props 
 * @returns 
 */
function PomodoroTimer(props) {


  // Initial starting time
  const [durationInMins, setDurationInMins] = useState(0);                   // time in minutes
  const [durationInMs, setDurationInMs] = useState(60000 * durationInMins);  // time in milliseconds
  
  // Time remaining 
  const [minsLeft, setMinsLeft] = useState(durationInMins);  
  const [secsLeft, setSecsLeft] = useState(5); 
  
  const [countdownDisplay, setCountdownDisplay] = useState(null); 



// use secret second mode
  const updateTimeLeft  = () => {
    if (minsLeft>0 && secsLeft===0) {
      setMinsLeft( minsLeft-1);
      setSecsLeft(59);

    } else if (secsLeft>0)  {
      setSecsLeft(secsLeft-1)
    } 

}

  // Option1: setTimeout 
  useEffect(() => {
        const timeout = setTimeout(() =>  {
          updateTimeLeft(); 
          setCountdownDisplay(formatTimeLeft(minsLeft, secsLeft)); 

  }, 1000); //  every sec update display

}, [secsLeft]);  // dependency array - any data changed then execute the callback function


    return (
      <div className='wrapper' style={styles.wrapper}>
         <div className='container' style={styles.container}>

            <div className="timer_circle" style={styles.timer_circle}>
                <p className="count_down" style={styles.count_down}>{countdownDisplay}</p> 
            </div>
        </div> 
      </div>
    )
  }
  
  export default PomodoroTimer;