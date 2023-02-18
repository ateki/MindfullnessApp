import BreathingBubble from '../components/BreathingBubble';

import imgBg from '../assets/Cave.png';

const styles = {

    backgroundImg: {
     backgroundImage: `url(${imgBg})`,
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     backgroundAttachment: 'fixed',
     width: '100vw',  // 100% of current viewpoint 
     height: '100vh' 
  
   }
 };
 

function Breathing(){
    return(
        <div style={styles.backgroundImg}>
        <h1>Breathing</h1>
        <BreathingBubble/>
        </div>
    )
}

export default Breathing