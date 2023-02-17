import { useState, useEffect } from 'react';




console.log('Breathing Bubble loading...');

// TODO: Can we see colours: as per index.css
const COLORS = {
  primaryLight: '#b9efef',
  primaryMedium: '#3badad',
  primaryDark: '#1f7676',

  secondaryLight: '#1f7676',
  secondaryMedium: '#f5dcc8',
  secondaryDark: '#ad3b5d86'
}


// ?? Can we use global colour variables below?

const styles = {
  
/*  "--primary-light":#b9efef,
 "--primary-dark":#1f7676,
 "--primary-medium":#3badad,

  --primary-dark:#1f7676;
  --primary-medium:#3badad;

  --secondary-light:#f6fce0;
  --secondary-medium:#f5dcc8;
  --secondary-dark:#ad3b5d86;

}
 */

  head: {

  },

  main: {

  },

  container: {
    display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      /* background: 'red',  */  //for testing only
     /*  padding: '25px 3%', */
      height: '300px',
      width: '300px',
/*       height: '250px',
      width: '250px', */
      margin: 'auto',   //middle
      position: 'relative',
      transform: 'scale(1)',
      textAlign: 'center',
      marginBottom: '25px',
      lineHeight: '1.5'
  
  },




    /* Solid coloured circle - middle */
    circle: {
      backgroundColor: 'darkgreen',
      height: '100%', // of container ie 300px
      width: '100%', // of container
      position: 'absolute', // within container
      top: '0',
      left: '0',  // middle?
      zIndex: '1', // on top 
      
      borderRadius: '50%' // circle
    },
    // https://www.sitepoint.com/create-css-conic-gradients-pie-charts/

    /* Outer circle representing border */
    gradient_outer_circle: {
      // background use conic gradient property
      /* background: 'conic-gradient(red 45deg, yellow 90deg, green 210deg)',  */  // A conic gradient is a gradient with color transitions rotated around a center point.
      /* background: 'conic-gradient(lightgreen 135deg, white 90deg, darkgreen 135deg)', */
      /* background: 'conic-gradient(lightgreen 0% 45%, white 45% 55%,  green 55% 100%)', */

      background: 'conic-gradient(#ad3b5d86 0% 45%, #f6fce0 45% 55%,  #3badad 55% 100%)',

     
      // background circle/border needs to be slightly larger than circle/container
      height: '325px',
      width: '325px',
      // move up and over to left - directly behind circle and dont want to start in same place??
       top: '-12px',
      left: '-12px', 
      zIndex: '-1',  // move to behind circle
      borderRadius: '50%', // circle
      position: 'absolute'    // within container
/* https://stackoverflow.com/questions/22406661/how-to-make-one-circle-inside-of-another-using-css#:~:text=Css%3A%20%23circle%20%7B%20margin%3A%2010em%20auto%3B%20background%3A%20%23385a94%3B,are%20always%20perfectly%20positioned%20next%20to%20each%20other. */
    },

    /* Use animations to have moving pointer effect */
    pointer: {

    },

    /* instructional /prompt text - inserted dynamically*/
    p: {
      color: 'white',
      zIndex: 2
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

const CLASSNAME_CONTAINER_GROW = 'container inflate-bubble';
const CLASSNAME_CONTAINER_SHRINK = 'container deflate-bubble';
// Do we need a CLASSNAME_CONTAINER_HOLD?
const CLASSNAME_CONTAINER_HOLD = 'container ';


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
    const [containerClasses, setContainerClasses] = useState(CLASSNAME_CONTAINER_GROW); // state to mimic inhale/exhale


    // Repeat cycle of breathing - so animation runs every totalCycleTime
      useEffect(() => {

        // As delay at start,  we need to go through one animation before interval called
        const intervalId = setInterval(() => {

            console.log(MSG_BREATHE_IN);
            setPrompt(MSG_BREATHE_IN);
            setContainerClasses(CLASSNAME_CONTAINER_GROW);

            /*   container.className = 'container grow inflate_bubble'; */

            setTimeout(() => {
                setPrompt(MSG_HOLD);
                console.log(MSG_HOLD);
                setContainerClasses(CLASSNAME_CONTAINER_HOLD);  // do we need?


                setTimeout(() => {
                    console.log(MSG_BREATHE_OUT);
                    setPrompt(MSG_BREATHE_OUT);
                    
                    setContainerClasses(CLASSNAME_CONTAINER_SHRINK);
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
       {/* <div className="container" style={styles.container}> */}

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