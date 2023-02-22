import BreathingBubble from '../components/BreathingBubble';

import imgBg from '../assets/sunset.jpg';

const styles = {
    backgroundImg: {
        backgroundImage: `url(${imgBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',  // 100% of current viewpoint 
        height: '100vh' 
    },

    bubble: {
        position: 'absolute',
        top: '30%',   // 50 container would start div but want center of circle in middle at middle
        width: '100%'
      }
      
   /*  
    bubble: {
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        height: 'auto'
    } */
 };
 

  
function Breathing(){
    return(
        <div style={styles.backgroundImg}>
            
            <div className='bubble' style={styles.bubble}>
                <BreathingBubble/>
            </div>
        </div>
    )
} 


export default Breathing