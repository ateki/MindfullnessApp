import { useNavigate } from "react-router-dom";

import imgBg from '../assets/LandingPage.png';


const styles = {

    
    backgroundImg: {
        backgroundImage: `url(${imgBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',  
        height: '100vh'
    },


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

   
};

    


function Menu(){

    const navigate = useNavigate();


    return (
        
        <div style={styles.backgroundImg}>

            <h3>Menu</h3>
            

            <div className='menu_options_container' style={styles.container}>
                
                <input type="button"  disabled={true} style={styles.button}  value="Gratefulness"/>
                <input type="button"  disabled={true} style={styles.button}  value="Journal"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Breathing`)} value="Breathing"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Meditations`)} value="Meditation"/>
                <input type="button"  disabled={true} style={styles.button}  value="Priority Helper Matrix"/>
                <input type="button"  disabled={true} style={styles.button}  value="Worry Tree Time"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Quotes`)} value="Quotes"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Pomodoro"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Sounds`)} value="Sounds/Music"/>

            </div>

        </div>
    )
}
 
export default Menu