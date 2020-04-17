import React from "react";

import troll1 from "../../assets/images/troll1.png";
import troll2 from "../../assets/images/troll2.jpeg";
import troll3 from "../../assets/images/troll3.jpeg";
import troll4 from "../../assets/images/troll4.png";

import "./styles.scss";

export default function Gallery() {
  return (
    <main>
      <div className="containerGallery">
        <img src={troll1} alt="image of trollface 1" />
        <img src={troll2} alt="image of trollface 2" />
        <img src={troll3} alt="image of trollface 3" />
        <img src={troll4} alt="image of trollface 4" />
      </div>
    </main>
  );
}
