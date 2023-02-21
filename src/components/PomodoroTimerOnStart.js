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

    ctrlBtnDisabled: {
      backgroundColor: '#d87c8c',  // change to darker pink from 
      fontFamily: 'FutoSansBold',
      /* fontSize: , */
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px',
      width: '50%'
    }

/*     ctrlBtnHide: {
      backgroundColor: '#rgb(0,0,0,0)', 
      fontFamily: 'FutoSansBold',
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px',
      width: '50%'
    } */
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
  
  

/* //Currently not used - held over from PomodoroTimeOnLoad
  const updateTimeLeft  = () => {
    console.log(`1)------------------secsLeft = ${secsLeft}  minsLeft = ${minsLeft}`);

    if (minsLeft>0 && secsLeft===0) {
      setMinsLeft( minsLeft-1);
      setSecsLeft(59);

    } else if (secsLeft>0)  {
      setSecsLeft(secsLeft-1)
    } 
    // TODO time ended
    // display message?   Break time - buzzer soun d
    // setSoundTimerEnd(true) - can we sound timer from html?
    // popup message - and end alarm button?

  } */




  useEffect(() => {

    // note to self:  use effect should only ever return a function or undefined

    // Runs each time change to the isTimerRunning boolean - triggered by button press
    console.log(`first render ${timeLeft}  isTimerRunning = ${isTimerRunning}`);

    
    if (isTimerRunning && timeLeft > 0) { 

     
        // Decrement from time every second if timer running, continuesly run below code in setINterval, every sec:
        const intervalId = setInterval(() => {
              console.log(`body of setInterval executing ${isTimerRunning}`); // only executes once
              /* setCountdownDisplay('XXXX');  */
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


/* console.log(`after useEffect ${minsLeft} : ${secsLeft}`); */




// TODO: Important
// How do you stop the interval other than through pause button? ie What is move to a new page - continues to run - can see in the logs?
// https://dev.to/dance2die/canceling-interval-in-react-52b5
// componentWillUnmount() {
 // clearInterval(this.intervalID);
//}
//TODO: Need to clear Interval on moving off page????  COnsole logs still continue. How do I stop other than pause timer?
// seems to now work if use state directly within jmx but not if want to check values to decide if reset secs/mins and format.
// It did work on page load with setTimeout but not now...





  // REDUCED TEST (2) - timer works on page load
  //                  - can't get to work with onclick start/pause because
  //                doesnt work with isTimerRunning as useEffect only runs when boolean changes (ie: pause or start clicked)
  //                    does not run continiously as setTimeout only runs once - after 1000 secs.
  //                  - however can get timer working on page load (if change useEffect dependency array to be []
  //                    Option2: setTimeout 
  //        Version below with setTimeout, updating secsLeft vis setSecsLeft, and [secsLeft] in dependency array works on page load


/*   useEffect(() => {
    // Runs each time change to the isTimerRunning boolean - triggered by button press
    console.log(`first time ${minsLeft} : ${secsLeft}  isTImerRunning = ${isTimerRunning}`);

      // if (isTimerRunning) {    
      // if timer running, continuesly run below code in setINterval, every sec:
      const timeout = setTimeout(() => {
            console.log(`body of setTimeout executing`); // only executes once
            setSecsLeft(secsLeft -1);
         
      }, 1000); //  every sec update display
   
    
//}, [isTimerRunning]);    // doesnt work, as useEffect will only be called on this bool changing (ie button click) and timeout body only runs once
}, [secsLeft]);  // only works for setTimeout not setInterval
 */


  // to get changed value either 
  
  // Option2: setTimeout only works if dependency array of useEffect has secsLeft - so called each time sec updated ie: every second
/*   useEffect(() => {
    console.log(`first time ${minsLeft} : ${secsLeft}  `);
      // const interval = setInterval(() => { 
        const timeout = setTimeout(() =>  {
          // clearInterval(interval); 
          updateTimeLeft(); 
          setCountdownDisplay(formatTimeLeft(minsLeft, secsLeft)); 

  }, 1000); //  every sec update display

}, [secsLeft]);  // dependency array - any data changed then execute the callback function
 */


    return (
      <div className='wrapper' style={styles.wrapper}>
         <div className='container' style={styles.container}>

            <div className="timer_circle" style={styles.timer_circle}>
              
              
               {/*  <p className="count_down" style={styles.count_down}>{timeLeft}</p>  */}
                
              
                <p className="count_down" style={styles.count_down}>{getDisplayTime(timeLeft)}</p> 



         {/*        <p className="count_down" style={styles.count_down}>{getDisplayTime(timeLeft)}</p>  */}

               {/*  <p className="count_down" style={styles.count_down}>{formatTimeLeft( minsLeft, secsLeft)}</p>  */}
               {/*  <p className="count_down" style={styles.count_down}>{secsLeft}   - {countdownDisplay}</p>  */}
           
                {/* <DigitalDisplay mins={minsLeft} secs={secsLeft}/> */}
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
                  <input type="button" value="Reset" style={styles.ctrlBtn} disabled={!isTimerRunning} 
                      onClick={() => resetTimer()
                  }/>
              )
              : 
              null
            }     
        </div> 
      </div>
    )
  }


export default PomodoroTimerOnStart;