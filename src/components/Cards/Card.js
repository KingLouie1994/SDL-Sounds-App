import React from "react";
import styles from "./Card.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import useSound from "use-sound";

const Card = (props) => {
  const [play] = useSound(`sounds/${props.sound.name}.mp3`);

  return (
    <div className={styles.card}>
      <p>{props.sound.description}</p>
      <button className={styles.playButton} onClick={play}>
        <PlayArrowIcon style={{ fontSize: 40 }} />
      </button>
    </div>
  );
};

export default Card;
