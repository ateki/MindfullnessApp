/**
 * Filename: BreathingBubble.js
 * Contents:  Component is visual animation of a breathing cycle: takes user visually through a breathing cycle with breath in, hold, breathe out stages.
 * Each timed to encourage slow deep breath.
 * Circle is shown expanding and contracting in time to the stages of breathing:  expands as inhale,
 * contracts as exhale).  
 * As though circles represent bubble inflating and defalting.
 * 
 */

import { useState, useEffect } from 'react';
import '../styles/breathing_bubble.css';




// TODO: Decide on setting colours at higher level so that pages using a certain background have associated colours available
// TODO: Should we move these now to the imported BreathingBubble.css?  No benefit to be here.
const styles = {

 /*  body: {
    backgroundImage: 'url("../assets/Cave.png")'
  }, */
   
  container: {
    display: 'flex',
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
    circle: {
      
      borderRadius: '50%',     // circle
      backgroundColor: 'var(--primary-dark1)',
      /* TODO: Still playing about with colours */
      /* backgroundColor: 'var(--primary-dark3)', */
      /* backgroundColor: 'var(--primary-dark2)', */
      /* backgroundColor: 'var(--font-medium)',  */
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

    /* instructional /prompt text */
    p: {
      color: 'white',
      zIndex: 2
    },

  
  };


/* Messages reprenting different stages of breathing cycle */
const MSG_HOLD = 'Hold';
const MSG_BREATHE_IN = 'Breathe in';
const MSG_BREATHE_OUT = 'Breathe out';


/* animation/breathing times for one cycle */
const totalCycleTime = 10000;
const breatheTime = 4000;
const holdTime = 2000;

/* container classes for each stage of breathing cycle */
const CLASSNAME_CONTAINER_GROW = 'container inflate_bubble';
const CLASSNAME_CONTAINER_SHRINK = 'container deflate_bubble';



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
function BreathingBubble(props) {

    const [prompt, setPrompt] = useState(''); 
    const [containerClasses, setContainerClasses] = useState(CLASSNAME_CONTAINER_GROW);   //  to mimic inhale/exhale

    const breathingCycleAnimation  = () => {
        console.log(`breathingCycleAnimation ...`);
             // Initial breathing cycle before first delay of setInterval kicks in
             console.log(MSG_BREATHE_IN);
             setPrompt(MSG_BREATHE_IN);
             setContainerClasses(CLASSNAME_CONTAINER_GROW);
     
             setTimeout(() => {
                   // stage: hold breathe for holdTime
                   console.log(MSG_HOLD);
                   setPrompt(MSG_HOLD);
                   //setContainerClasses(CLASSNAME_CONTAINER_HOLD); 
                   
                   setTimeout(() => {
                         // stage:  breathe out until interval reaches totalCycleTime (time remaining)
                         console.log(MSG_BREATHE_OUT);
                         setPrompt(MSG_BREATHE_OUT);
                         setContainerClasses(CLASSNAME_CONTAINER_SHRINK);
                       
                   }, holdTime);  // setTimeout
     
             }, breatheTime); // setTimeout

    }; 



    useEffect(() => {
        breathingCycleAnimation(); 

        // Continue breathing cycles - animation runs every totalCycleTime
        const intervalId = setInterval(() => {

            breathingCycleAnimation();

        }, totalCycleTime); //setInterval

    

        // Clear interval and avoid memory leak
        // How? modify useEffect() hook to return function that calls clearInterva()
        return () => clearInterval(intervalId);
    }, []);



    return (
      <>
       <div className={containerClasses} style={styles.container}>

            <div className="circle" style={styles.circle}></div>

            <p id="text" style={styles.p}>{prompt}</p>

            <div className="pointer-container"><div className="pointer"></div></div>
            
            <div className="gradient_outer_circle" style={styles.gradient_outer_circle}></div>
        </div>
      </>
    )
  }
  
  export default BreathingBubble;