/**
 * Filename: PomodoroTimer2.js
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
      position: 'relative',
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

      /* so can center count down properly and responsive */
      lineHeight: '0', 
      position: 'relative',   

      top: '100px',
      left: '0', 
      zIndex: '1'
    },

    timer_circle2: {
      
      borderRadius: '50%',     // circle
      backgroundColor: 'rgb(0, 0, 0, 0.1)',
      border: '2px solid white',
      color: 'white',
      height: '100%',         
      width: '100%',         
      position: 'absolute',   
      top: '0',
      left: '0', 
      zIndex: '1'
    },
    /* Outer circle representing border - using conic gradient property as background - with gradient of colour transitions rotated around a center point */
    /* Appears below */
    //TODO: Decide on colouring 
    gradient_outer_circle: {
      
      borderRadius: '50%',    // circle
      
      // 3 colours - representing breath in, hold, breath out
      /* Option1: Indicating Hold breath at bottom */
      /*      background: 'conic-gradient(#ad3b5d86 0% 45%, #f6fce0 45% 55%,  #3badad 55% 100%)', */
      /* Option 2: Indicating  hold breath at top */
     /*   background: 'conic-gradient(#f6fce0 0% 5%, #ad3b5d86 5% 50%,  #3badad 50% 95%, #f6fce0 95% 100%)', */
      /* background: 'conic-gradient(var(--primary-light5) 0% 5%, #ad3b5d86 5% 50%,  var(--primary-dark4) 50% 95%, var(--primary-light5) 95% 100%)', */
      background: 'conic-gradient(var(--light) 0% 5%, #ad3b5d86 5% 50%,  var(--dark) 50% 95%, var(--medium) 95% 100%)',
    
      // background circle/border needs to be slightly larger than circle/container
      height: '325px',
      width: '325px',

      // move up and over to left 
       top: '-12px',
      left: '-12px', 
      zIndex: '-1',          //behind main center circle
      position: 'absolute'    
    },

    /* Use animations to have moving pointer effect */
    pointer: {

    },

    count_down: {
      position: 'absolute',
      width: '100%',
      color: 'purple',
      textAlign: 'center',
      bottom: '50%',
      fontWeight: 'bold',
  /*     justifyContent: 'center',
      alignItems: 'center', */
      zIndex: 2
    },

/*     count_down: {
      color: 'red',
      psotion:'absolute',
      bottom: '50%',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2
    }, */

    /* instructional /prompt text */
    p: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
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
function PomodoroTimer2(props) {

  
    const [duration, setDuration] = useState(TIME_DEFAULT); 
    const [timeLeft, setTimeLeft] = useState(duration);


    return (
      <>
         <div className='container' style={styles.container}>

         <div className="timer_circle" style={styles.timer_circle}>
                  <div className='count_down' style={styles.count_down}>11:30</div>
         </div>


{/* 
            <div style={styles.container_timer}> */}
   {/*              <div className="timer_circle" style={styles.timer_circle}>
                  <p id="count_down" style={styles.p}>{duration}</p>
                </div> */}
    {/*             <div className="timer_circle" style={styles.timer_circle}>
                  <div className='count_down' style={styles.count_down}>11:30</div>
                </div> */}
               {/* <p id="count_down" style={styles.p}>{duration}</p> */}
               
               {/* <div> */}
  {/*           </div> */}


            {/* <p> Temp placeholder for slider showing pss values from {TIME_MIN} mins to {TIME_MAX} mins </p> */}

            <input type="button"  style={styles.startBtn} onClick={() => console.log('pomodoro start button clicked')} value="Start"/>

        </div> 
      </>
    )
  }
  
  export default PomodoroTimer2;