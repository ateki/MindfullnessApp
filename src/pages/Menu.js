import { useNavigate } from "react-router-dom";


const styles = {

    container: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridGap: '20px',
        margin: 'auto auto',
        gridTemplateRows: '50px 50px ',
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
                <input type="button"  style={styles.button} onClick={() => navigate(`/Pomodoro`)} value="Pomodoro Tool"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Breathing`)} value="Breathing Tool"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Meditations`)} value="Meditations Tool"/>
                <input type="button"  style={styles.button} onClick={() => navigate(`/Sounds`)} value="Sounds/Music Tool"/>

            </div>
        </>
    )
}
 
export default Menu