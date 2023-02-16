import { useState, useEffect } from 'react';




console.log('Breathing Bubble loading...');

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


  
const MSG_HOLD = "Hold";
const MSG_BREATHE_IN = "Breath in";
const MSG_BREATHE_OUT = 'Breathe Out';


// animation/breathing times for one cycle
const totalCycleTime = 9000;
const breatheTime = 4000;
const holdTime = 2000;




/**
 * The below visually replicates inhale,hold,exhale breath: where change in breathing is timed and stage of
 * breathing is displayed in a prompt.
 * NOTE: Currently the below has 2 concerns:
 * 1) Use of utility functions did not appear to work.  usePrompt, useState, useEffect only seemed to work when called
 * directly in the React component function, not from a utility function.
 * 2) On page load, breathing cycle does not start until end of first interval (pause of approx 9 secs).
 * This can only be corrected by repeating the 2 setTimeout blocks of code before the setInterval block.
 * However, that makes BreathingBubble even longer unless can get utility functions working.
 * @param {*} props 
 * @returns 
 */

// TODO: Break down the above code in utility function/s
// TODO: Avoid interval pause when page loads by callling code for one breathing cycle (2 setTimeOuts) straightaway, before call to setInterval above
function BreathingBubble(props) {

    const [prompt, setPrompt] = useState('');  // cause update in dom each time var changes..

    // Repeat cycle of breathing - so animation runs every totalCycleTime
      useEffect(() => {

        // As delay at start,  we need to go through one animation before interval called
        const intervalId = setInterval(() => {

            console.log(MSG_BREATHE_IN);
            setPrompt(MSG_BREATHE_IN);
            /*   container.className = 'container grow inflate_bubble'; */

            setTimeout(() => {
                setPrompt(MSG_HOLD);
                console.log(MSG_HOLD);

                setTimeout(() => {
                    console.log(MSG_BREATHE_OUT);
                    setPrompt(MSG_BREATHE_OUT);
                  /*  container.className = 'container shrink deflate_bubble'; Need to use setEffect*/
                  /* container.addClass() */
                    
                }, holdTime);  // setTimeout

            }, breatheTime); // setTimeout

        }, totalCycleTime); //setInterval

        // https://sebhastian.com/setinterval-react/#:~:text=How%20to%20use%20setInterval%20%28%29%20method%20inside%20React,setInterval%20%28%29%20method%20inside%20a%20useEffect%20%28%29%20hook.
        // modify setInterval to reaturn function that calls clearINterval and pass interval id

      // remember to clear interval and avoid memory leak
      // How? modify useEffect() hook to return function that calls clearInterva()
      return () => clearInterval(intervalId);


    }, []);


    return (
      <>
        <h3 style={styles.h3}>Test Breathing Bubble</h3>

        {/* <div class="container">  JSX not std html but considered props and some attributes not same. ie: Class  need to use className in JSX which will compile down. */}      
       {/*  <div class={styles.container}> */} {/* // ids use most often for js targets.  Targetting and handling emleents and changes thro logic diff way */}
       <div className="container">

            <div className="circle"></div>

            <p id="text">{prompt}</p>

            <div className="pointer-container"><div className="pointer"></div></div>

            <div className="gradient_outer_circle"></div>
        </div>

      </>
    )
  }
  
  export default BreathingBubble;