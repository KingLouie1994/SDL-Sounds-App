import React from "react";
import styles from "./Glossary.module.css";
import Data from "./Data";

import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";

import { Link } from "react-router-dom";

const Glossary = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <button className={styles.backHome}>
            <KeyboardBackspaceRoundedIcon />
          </button>
        </Link>
      </div>
      <div className={styles.glossary}>
        <h2 className={styles.heading}>Glossar</h2>
        {Data.map((shortcut) => {
          return (
            <div className={styles.shortcut}>
              <p className={styles.text}>{shortcut.shortcut}</p>
              <p className={styles.text}>{shortcut.explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Glossary;
