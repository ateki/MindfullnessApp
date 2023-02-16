import { useState, useEffect } from 'react';




console.log('Breathing Bubble  Tidy loading...');

const styles = {
  

    container: {

    },


    /* Solid coloured circle - middle */
    circle: {

    },

    /* Outer circle representing border */
    gradient_outer_circle: {

    },

    /* Use animations to have moving pointer effect */
    pointer: {

    },

    /* instructional /prompt text - inserted dynamically*/
    p: {

    },

/*     section: {
      backgroundColor: '#555'
    }, */
   
    h3: {
      /* color: '#ddd'  */
      color: 'red'
    }
  
  };


  /* Change to react */
const container = document.querySelector('.conatiner');
const text_prompt = document.querySelector('#text');

const MSG_HOLD = "Hold";
const MSG_BREATHE_IN = "Breath in";
const MSG_BREATHE_OUT = 'Breathe Out';


// animation/breathing times for one cycle
const totalCycleTime = 9000;
const breatheTime = 4000;
const holdTime = 2000;




/**
 * Utility function to animate one full cycle of breathing in, hold, out.
 * Attempt 2 - try to pass in function callback from BreathingBubbleTidy() , but not sure how to call this
 * However, not sure how to call this from within function.
 *  ERROR:  Line 91:5:   'setPrompt' is not defined  no-undef
 * @param {*} setPrompt 
 */
function breatheAnimation(setPrompt) {

  
  console.log(MSG_BREATHE_IN);
  setPrompt(MSG_BREATHE_IN);
  //container.className = 'container inflate_bubble';

  setTimeout(() => {
      setPrompt(MSG_HOLD);
      console.log(MSG_HOLD);

      setTimeout(() => {
          setPrompt(MSG_BREATHE_OUT);
          console.log(MSG_BREATHE_OUT);
          //container.className = 'container deflate_bubble';
          
      }, holdTime);

  }, breatheTime);


}

/*
 * Attempted to use utility functions that could be called below in the React component function.
 * however, various errors would occur.  Appears as though useState, useEffect, setPrompt need to be called from within React component function.
//  * Is there any way I can split it up into utility functions and access use state without it complainingbreatheAnim
*/
// Repeat cycle - so animation runs every totalCycleTime
// Call breatheAnimation in intervals of  totalCycleTime 
/* setInterval(breatheAnimation. totalCycleTime); */



function BreathingBubbleAttempt2(props) {

  
    const [prompt, setPrompt] = useState('');  // cause update in dom each time var changes..

    // Repeat cycle - so animation runs every totalCycleTime
    // Call breatheAnimation in intervals of  totalCycleTime 
    
      useEffect(() => {

        breatheAnimation({setPrompt});

        const intervalId = setInterval(() => {
          

            breatheAnimation({setPrompt});

        }, totalCycleTime); //setInterval

      // remember to clear interval and avoid memory leak
      // How? modify useEffect() hook to return function that calls clearInterva()
      return () => clearInterval(intervalId);

    }, []);


    return (
      <>
        <h3 style={styles.h3}>Test Breathing Bubble</h3>

      <div className="container">

            <div className="circle"></div>
            <p id="text">{prompt}</p>

            <div className="gradient_outer_circle"></div>
        </div>

      </>
    )
  }
  
  export default BreathingBubbleAttempt2;