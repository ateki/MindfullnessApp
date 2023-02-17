import T2 from "../assets/T2.gif";
import T3 from "../assets/T3.gif";
import T4 from "../assets/T4.gif";
import T5 from "../assets/T5.gif";
// import T6 from "../assets/T6.gif";
import "../styles/garden.css";
import garden from "../assets/Garden.png";

function Garden() {
  return (
    <div className="gardenBackground">
      <h3>Welcome to your Garden</h3>

      <div className="tree">
        <img src={T3} />
      </div>
    </div>
  );
}

export default Garden;
