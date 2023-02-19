/* import PomodoroTimer from '../components/PomodoroTimerAbsolute'; */    
import PomodoroTimer from '../components/PomodoroTimer';

import imgBg from '../assets/LandingPage.png';


// background-color: #F08A9B; // pink used on main page
// TODO: Store library of colours - associated with background 
// image being used, and reuse throughout site




const styles = {
    backgroundImg: {
        backgroundImage: `url(${imgBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',  
        height: '100vh'
    }
}

function Pomodoro(){
    return(
        <div style={styles.backgroundImg}>
            <PomodoroTimer/>
        </div>
    )
}

export default Pomodoro