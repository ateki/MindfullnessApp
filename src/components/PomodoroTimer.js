/**
 * Filename: PomodoroTimer.js
 * Contents:  
 * 
 */
// TODO: In last  minute display count down in secs...
import { useState, useEffect } from 'react';
//import '../styles/pomodoro.css';


/* 
const styles = {

  container: {
      position: 'relative',
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: '20px',
      top: '200px',
      margin: '0 auto',
      gridTemplateRows: '50px 50px 50px 50px 50px ',
      gridTemplateColumns: '200px 200px ',
      padding: '10px',
      justifyContent: 'center',
      alignItems: 'center'

    },
    
    button: {
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      textAlign: 'center'
    }

 
}; */

/* 


container: {
  position: 'relative',
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '20px',
  top: '200px',
  margin: '0 auto',
  gridTemplateRows: '50px 50px 50px 50px 50px ',
  gridTemplateColumns: '200px 200px ',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center' */


const styles = {

  body: {
    backgroundImage: 'url("../assets/Landing.png")'
  },
   
  container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      width: '300px',
      margin: 'auto',   //middle
     /*  position: 'relative', */
      transform: 'scale(1)',      // default scaling - used to  grow and shrink
      textAlign: 'center',
      marginBottom: '25px',
      lineHeight: '1.5'
  },
 

    /* Solid coloured circle - appears in middle, top element */
    timer_circle: {
      
      borderRadius: '50%',     // circle
      backgroundColor: 'rgb(0, 0, 0, 0.1)',
      border: '2px solid white',
      color: 'white',
      height: '100%',         
      width: '100%',      

      position: 'absolute',   
      top: '200px',   /* from 0 */
      left: '0', 
      zIndex: '1'
    },


    /* CENTER TEXT IN CIRCLE */
    count_down: {
      position: 'absolute', /* to vertically center */
      bottom: '50%',
      width: '100%',
      color: 'purple',
      textAlign: 'center',
    /*   bottom: '50%', */
      fontWeight: 'bold',
      zIndex: 2
    },
  

   
    startBtn: {
      backgroundColor: '#F08A9B',
      fontFamily: 'FutoSansBold',
      /* fontSize: , */
      color: 'white',
      borderStyle: 'none',
      padding: '16px 40px 16px 40px',
      borderRadius: '10px',
      marginTop: '30px'
    },

    /* How to put this inline style object rather than .css file ? */
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
      <>
         <div className='container' style={styles.container}>


            <div style={styles.container_timer}>
                <div className="timer_circle" style={styles.timer_circle}>
                  <p className="count_down" style={styles.count_down}>{duration}</p>
                </div>
               
            </div>


           
            <input type="button"  style={styles.startBtn} onClick={() => console.log('pomodoro start button clicked')} value="Start"/>

        </div> 
      </>
    )
  }
  
  export default PomodoroTimer;