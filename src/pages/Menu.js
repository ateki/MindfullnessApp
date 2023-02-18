import { useNavigate } from "react-router-dom";


/* #content {
    width: 400px;
    margin: 0 auto;
    background-color: #66ffff;
} */


const styles = {

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
      },

   
};

    


function Menu(){

    const navigate = useNavigate();


    return (
        <>

            <h3>Menu</h3>
            

            <div className='menu_options_container' style={styles.container}>
                
      {/*           <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Gratefulness"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Priority Matrix"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Journal"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Worry Time/ Worry Tree"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Breathing`)} value="Breathing Tool"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Quotes`)} value="Quotes"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Meditations`)} value="Meditation"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Pomodoro"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Sounds`)} value="Sounds/Music"/>

 */}
                
                
                <input type="button"  disabled='true' style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Gratefulness"/>
                <input type="button"  disabled='true' style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Journal"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Breathing`)} value="Breathing"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Meditations`)} value="Meditation"/>
                <input type="button"  disabled='true' style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Priority Helper Matrix"/>
                <input type="button"  disabled='true' style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Worry Tree Time"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Quotes`)} value="Quotes"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Pomodoro"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Sounds`)} value="Sounds/Music"/>


            </div>

        </>
    )
}
 
export default Menu