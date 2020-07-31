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
      </div>
    </div>
  );
};

export default Glossary;
