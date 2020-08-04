import React, { useState } from "react";
import styles from "./Glossary.module.css";
import Data from "./Data";
import Filter from "../Filter/Filter";

import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";

import { Link } from "react-router-dom";

const Glossary = () => {
  const [sort, setSort] = useState("");

  const fromAToZ = (a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  };

  const fromZToA = (a, b) => {
    if (a.id > b.id) {
      return -1;
    } else if (a.id < b.id) {
      return 1;
    } else {
      return 0;
    }
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    if (e.target.value === "zToA") {
      Data.sort(fromZToA);
    } else {
      Data.sort(fromAToZ);
    }
  };

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
        <div className={styles.filterAndSearch}>
          <Filter handleSortChange={handleSortChange} />
          Suche:
        </div>
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
