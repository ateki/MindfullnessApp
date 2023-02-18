import T2 from "../assets/T2.gif";
import T3 from "../assets/T3.gif";
import T4 from "../assets/T4.gif";
import T5 from "../assets/T5.gif";
// import T6 from "../assets/T6.gif";
import T2G from "../assets/T2Grass.gif";
import T3G from "../assets/T3Grass.gif";
import T4G from "../assets/T4Grass.gif";
import T5G from "../assets/T5Grass.gif";
import T6G from "../assets/T6Grass.gif";
import "../styles/garden.css";
import garden from "../assets/Garden.png";
import { useState } from "react";

function Garden() {

let [tree, treeGrowth] = useState(T2G);


  return (
    <div className="gardenBackground">
      

      <button className="treeButton" onClick={() => {
  if (tree === T2G) {
    treeGrowth(T3G);
  } else if (tree === T3G) {
    treeGrowth(T4G);
  } else if (tree === T4G) {
    treeGrowth(T5G);
  } else if(tree === T5G) {
    treeGrowth(T6G)
  } else {}
}}>
Let's Grow!
</button>
      <div >
        <img className="tree" src={tree} />
      </div>
      
    </div>
  );
}

export default Garden;
