import React from "react";
import styles from "./Cards.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>Moiiin Luis</p>
        <button className={styles.playButton}>
          <PlayArrowIcon style={{fontSize: 40}}/>
        </button>
      </div>
    </div>
  );
};

export default Cards;
