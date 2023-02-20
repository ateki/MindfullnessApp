/**
 * Filename: PomodoroTimer.js
 * Contents:  
 * 
 */

/* import Slider from '@mui/material/Slider';
// or */
/* import { Slider } from '@mui/material'; */

import e from 'express';
import { useState, useEffect } from 'react';
//import '../styles/pomodoro.css';




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
    },
 
   
    startBtn: {
      backgroundColor: '#F08A9B',
      fontFamily: 'FutoSansBold',
      /* fontSize: , */
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px',
      width: '50%'
    },

    /* TODO: Move styles to css file, import and include hover as no inline equivalent. */
    'startBtn:hover': {
        backgroundColor: '#d87c8c' 
    }
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


/* function valuetext(value: number) {
  return `${value}°C`;
} */
/**
 * The below visually replicates inhale,hold,exhale breath: where change in breathing is timed and stage of
 * breathing is displayed in a prompt message.
 * 
 * NOTE: Currently the below has 2 concerns:
 * Use of utility functions did not appear to work.  usePrompt, useState, useEffect only seemed to work when called
 * directly in the React component function, not from a utility function.
 * TODO: Break down the above code in utility function/s but need to use REACT hooks effect and state from below
 * @param {*} props 
 * @returns html representing breathing bubble - visually shows different stages of breathing cycle
 */
function PomodoroTimerNew(props) {
  
    /*   const [minsLeft, setMinsLeft] = useState(5);  // test time
      const [secsLeft, setSecsLeft] = useState(0); 
    */
    /* const sessionDurationMins = 5; // Incoming data...hardcode for now but will come from slider */
 
/*     
    const [durationInMins, setDurationInMins] = useState(5);  // time in minutes
    const [durationInMs, setDurationInMs] = useState(60000 * {durationInMins});  // time in milliseconds
    
   
    // Time remaining - to be displayed on timer
    const [minsLeft, setMinsLeft] = useState({durationInMins});  
    const [secsLeft, setSecsLeft] = useState(0); */

    /* const [timeLeft, setTimeLeft] = useState({durationInMins}); */

 

    




   

/*     useEffect(() => {
      //Runs on the first render
      //And any time any dependency value changes

      // timeout works on millisecs
      // not every sec/min change
    }, [minsLeft, secsLeft]); */


    return (
      <div className='wrapper' style={styles.wrapper}>
         <div className='container' style={styles.container}>

            <div className="timer_circle" style={styles.timer_circle}>
                {/* <p className="count_down" style={styles.count_down}>{minsLeft}:{secsLeft}</p> */}
                <p className="count_down" style={styles.count_down}>TimeLeft is 10</p>
            </div>

              {/* TODO: Add slider */}
{/*             <Slider
              aria-label="Always visible"
              defaultValue={80}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              valueLabelDisplay="on"
            /> */}


            <input type="button"  style={styles.startBtn} onClick={() => console.log('pomodoro start button clicked')} value="Start"/>

        </div> 
      </div>
    )
  }
  
  export default PomodoroTimerNew;