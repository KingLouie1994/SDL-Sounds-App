import React from "react";
import styles from "./Cards.module.css";
import sounds from "./soundSource";
import Card from "./Card";

const Cards = () => {
  return (
    <div className={styles.container}>
      {sounds.map((sound) => {
        return <Card key={sound.id} sound={sound} />;
      })}
    </div>
  );
};

export default Cards;
