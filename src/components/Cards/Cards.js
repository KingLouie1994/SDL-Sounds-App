import React from "react";
import styles from "./Cards.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import useSound from "use-sound";
import exampleSound from "../../sounds/Moin_Luis.mp3";

const Cards = () => {
  const [play] = useSound(exampleSound);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>Moiiin Luis</p>
        <button className={styles.playButton} onClick={play}>
          <PlayArrowIcon style={{ fontSize: 40 }} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
