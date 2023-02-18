import "../styles/landing.css";
import petals from "../assets/FallingPetals.gif";

function Landing() {
  return (
    <div>
    <div className="landingBackground1">
        <img className="petals" src={petals}></img>
      <div className="textContainer">
        <h1 className="mainTitle">MINDFULL</h1>
        <div className="bodyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br></br>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br></br>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate<br></br>
        velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <button className="landingButton">Start the Journey</button>
      </div>
    </div>
    <div className="landingBackground2"></div>
    </div>
  );
}

export default Landing;
