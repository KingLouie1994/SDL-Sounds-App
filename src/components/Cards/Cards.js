import React from "react";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>Moiiin Luis</p>
        <button className={styles.playButton}>Play</button>
      </div>
    </div>
  );
};

export default Cards;
