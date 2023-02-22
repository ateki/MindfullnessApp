/**
 * Filename: PomodoroTimer.js
 * Contents:  
 *   So far with start, pause reset functionality.
 * To be extende Settings/Actions/WorkRest Periods
 *   
 */


import { useState, useEffect } from 'react';


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
function PomodoroTimerOnStart(props) {

      // Initial starting time
      const DEFAULT_WORK_DURATION  = 1500; // 25 mins
    
      // Time remaining 
      const [timeLeft, setTimeLeft] = useState(DEFAULT_WORK_DURATION);
      const [isTimerRunning, setIsTimerRunning]= useState(false); 

      const startTimer = () => {
        setIsTimerRunning(true);

      }
      const pauseTimer = () => {
        setIsTimerRunning(false);

      }
      const resetTimer = () => {
        setIsTimerRunning(false);
        setTimeLeft(DEFAULT_WORK_DURATION);

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
        return(`${mm} : ${ss}`);
      } 


      const getDisplayTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60; 
        return formatTimeLeft(mins, secs);
        //return `${mins < 10 ? '0' + min : min} : ${secs < 10 ? '0' + secs : secs}`;
      }
      

      useEffect(() => {
        // Runs each time change to the isTimerRunning boolean - triggered by button press

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
      
    }, [isTimerRunning, timeLeft]);     // Only run useEffect on button click - disable start /pause button when pressed.



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

            {/* show reset button only when timer not running and not at start ie: timesLeft < timer duration */}
            {
            /*   !isTimerRunning && (timeLeft < TEST_DURATION}) */
              (!isTimerRunning && timeLeft < DEFAULT_WORK_DURATION)
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