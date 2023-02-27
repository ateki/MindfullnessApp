/**
 * Filename: PomodoroTimer.js
 * Contents:  
 *   Pomodoro clock with start/pause buttons.  Initially implemented a RESET button
 * however have temporarily replaced this with the work duration slider and commented out temporarily RESET.
 * Plan is to move to a seperate settings page where slider should sit.  Once this happens, RESET functionality should
 * be visible from this page.
 * TODO: Extend with seperate Settings page where set work and rest duration periods. User should be able to select from a list of editable todo items.
 * to determine which action should be focused on.
 * TODO: Play alarm until user switches off.
 */

import { useState, useEffect } from 'react';
import PomodoroSlider from './PomodoroSlider';

import '../styles/pomodoro.css';


/* Work Slider settings */
const WORK_TIME_DEFAULT_IN_MINS = 25;   // Initial starting time
const WORK_SLIDER_STEP = 5;
const WORK_TIME_MIN = 5;
const WORK_TIME_MAX = 60;



//const AUDIO_ALARM = new Audio('./assets/sfx/alarm.wav');
//const ALARM_DURATION = 6000;  // 6 secs for now until integrated with popup modal to stop alarm

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

    /* CIRCLE FOR TIMER - transparent -  flex item */
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
 

/* .controlBtn:hover {
  background-color: #d87c8c; */

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



/**
 * 
 * @param {*} props 
 * @returns 
 */
function PomodoroTimerOnStart(props) {

      // Initial starting time/
      const WORK_TIME_DEFAULT_IN_SECS  = WORK_TIME_DEFAULT_IN_MINS * 60; // 5 mins 
    
      // Time remaining in secs
      const [timeLeft, setTimeLeft] = useState(WORK_TIME_DEFAULT_IN_SECS);
      const [isTimerRunning, setIsTimerRunning]= useState(false); 


      const initTimer = (newTimeInMins) => {
        setIsTimerRunning(false);
        setTimeLeft(newTimeInMins * 60);
      }

      const startTimer = () => {
        setIsTimerRunning(true);

      }
      const pauseTimer = () => {
        setIsTimerRunning(false);
      }

      const soundAlarm = () => {
          //console.log(`sound alarm`);
          //new Audio(AUDIO_ALARM).play();
      }

      const resetTimer = () => {
        setIsTimerRunning(false);
        setTimeLeft(WORK_TIME_DEFAULT_IN_SECS);

      }


      /**
       * Returns string representing time in format: mm : ss
       * Padding out any single digit ensuring mins or secs passed in are always displayed as 2 digits
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
                  setTimeLeft(timeLeft => timeLeft -1);
            
            }, 1000); //  every sec update display
            
            // When decide to set this to running, give clean up function
            // Cleanup happens when either useEffect runs again OR component is about to be unmounted!!! == similar to componentWillUnmount in class based components
            // ... it issolates react component from side effects!!
            return () => clearInterval(intervalId);

        } else if (timeLeft===0) {
            setIsTimerRunning(false);
            /* Play audio - for now 10 secs until implement popup modal */
            //soundAlarm();
            //const alarmTimeout = setTimeout(() => {
            //    clearTimeout(alarmTimeout);
            //}, ALARM_DURATION); // setTimeout
         
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
                  <input type="button" value="Pause" className="ctrlBtn" style={styles.ctrlBtn} /* disabled={!isTimerRunning} */ 
                      onClick={() => pauseTimer()
                  }/>
              )
              : 
              (
                  <input type="button" value="Start" className="ctrlBtn" style={styles.ctrlBtn} /* disabled={isTimerRunning}  */
                      onClick={() =>  startTimer() 
                  }/>  
              )
            }

            {/* TODO: KEEP THIS COMMENTED OUT UNTIL MOVE TO SETTINGS PAGE:
            This will be used once we move to settings page - where slider will be on settins page. */}
            {/* show reset button only when timer not running and not at start ie: timesLeft < timer duration */}
{/*             {
              (!isTimerRunning && timeLeft < WORK_TIME_DEFAULT_IN_SECS)
              ? 
              (
                  <input type="button" value="Reset" className="ctrlBtn"  style={styles.ctrlBtn} 
                      onClick={() => resetTimer()
                  }/>
                  
              )
              : 
             
              (
                <input type="button" value="HiddenReset" className="ctrlBtn" style={styles.ctrlBtnHidden} 
                    onClick={() => resetTimer()
                }/>
              ) 
            }    
            */} 

            <PomodoroSlider  
                                  /* visible={'true'}      */     
                                  value={timeLeft}
                                  step={WORK_SLIDER_STEP}
                                  min={WORK_TIME_MIN}
                                  max={WORK_TIME_MAX} 
                                  default={WORK_TIME_DEFAULT_IN_MINS}
                                  onChange = {(_, newValue) => initTimer(newValue)} />

        
        </div> 
      </div>
    )
  }


export default PomodoroTimerOnStart;