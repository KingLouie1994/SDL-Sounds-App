import React from "react";
import styles from "./SoundsContainer.module.css";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";

import { Link } from "react-router-dom";

import Cards from "../Cards/Cards";

const SoundsContainer = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <button className={styles.backHome}>
            <KeyboardBackspaceRoundedIcon />
          </button>
        </Link>
      </div>
      <Cards />
    </div>
  );
};

export default SoundsContainer;
