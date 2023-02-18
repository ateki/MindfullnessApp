import PomodoroTimer from '../components/PomodoroTimer';
/* import PomodoroTimer from '../components/PomodoroTimer2'; */
/* import PomodoroTimer from '../components/PomodoroTimer3'; */

import imgBg from '../assets/LandingPage.png';


// background-color: #F08A9B; // pink to use



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
}

function Pomodoro(){
    return(
        <div style={styles.backgroundImg}>
            <h1><PomodoroTimer/></h1>
        </div>
    )
}




export default Pomodoro