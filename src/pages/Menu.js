import { useNavigate } from "react-router-dom";
import BreathingBubble from "../components/BreathingBubble";
import "../styles/menu.css";
import PomodoraIcon from "../assets/PomodoraIcon.png";
import BreathIcon from "../assets/BreathIcon.png";
import MeditationIcon from "../assets/MeditationIcon.png";
import QuoteIcon from "../assets/QuoteIcon.png";

const styles = {
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "20px",
    margin: "auto auto",
    gridTemplateRows: "50px 50px ",
    gridTemplateColumns: "200px 200px ",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  //   button: {
  //     padding: '10px',
  //     border: '1px solid black',
  //     borderRadius: '5px',
  //     width: '100%',
  //     height: '100%',
  //     cursor: 'pointer',
  //     textAlign: 'center'
  //   },
};

//import BreathingBubble from '../components/BreathingBubbleAttempt1';
//import BreathingBubble from '../components/BreathingBubbleAttempt2';

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menuBackground">
      <div className="menu_options_container" style={styles.container}>
        {/* <input
          type="button"
          style={styles.button}
          onClick={() => navigate(`/Pomodoro`)}
          value="Pomodoro Tool"
        />
        <input
          type="button"
          style={styles.button}
          onClick={() => navigate(`/Breathing`)}
          value="Breathing Tool"
        />
        <input
          type="button"
          style={styles.button}
          onClick={() => navigate(`/Meditations`)}
          value="Meditations Tool"
        />
        <input
          type="button"
          style={styles.button}
          onClick={() => navigate(`/Sounds`)}
          value="Sounds/Music Tool"
        />
        <input
          type="button"
          style={styles.button}
          onClick={() => navigate(`/Quotes`)}
          value="Quotes Tool"
        /> */}
      </div>
      
    <div className="menuIconsContainer">
      <img className="menuIcon1" src={PomodoraIcon} onClick={() => navigate(`/Pomodoro`)}></img>
      <img className="menuIcon2" src={BreathIcon} onClick={() => navigate(`/Breathing`)}></img>
      <img className="menuIcon3" src={MeditationIcon} onClick={() => navigate(`/Meditations`)}></img>
      <img className="menuIcon4" src={QuoteIcon} onClick={() => navigate(`/Quotes`)}></img>
      </div>
    </div>
  );
}

export default Menu;
