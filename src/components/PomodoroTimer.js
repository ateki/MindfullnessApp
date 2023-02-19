/**
 * Filename: PomodoroTimer.js
 * Contents:  
 * 
 */
// TODO: In last  minute display count down in secs...
import { useState, useEffect } from 'react';
//import '../styles/pomodoro.css';




const styles = {

/*   body: {
    backgroundImage: 'url("../assets/Landing.png")'
  }, */
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
function PomodoroTimer(props) {

  
    const [duration, setDuration] = useState(TIME_DEFAULT); 
    const [timeLeft, setTimeLeft] = useState(duration);


    return (
      <div className='wrapper' style={styles.wrapper}>
         <div className='container' style={styles.container}>

            <div className="timer_circle" style={styles.timer_circle}>
                <p className="count_down" style={styles.count_down}>{duration}</p>
            </div>

            <input type="button"  style={styles.startBtn} onClick={() => console.log('pomodoro start button clicked')} value="Start"/>

        </div> 
      </div>
    )
  }
  
  export default PomodoroTimer;