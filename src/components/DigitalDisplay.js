
import { useState } from 'react';



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



function DigitalDisplay(props) {

  
  const [timeLeftDisplay, setTimeLeftDisplay] = useState('00:00');


  
  setTimeLeftDisplay(formatTimeLeft(props.mins, props.secs));



   

  return (
    
      <p>{timeLeftDisplay}</p>
   
  );
}

export default DigitalDisplay;




