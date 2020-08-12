import React, { useState } from "react";
import styles from "./Glossary.module.css";
import Data from "./Data";
import Filter from "../Filter/Filter";

import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";

import { Link } from "react-router-dom";

const Glossary = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

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

  const editSearchTerm = (e) => {
    setSearch(e.target.value);
  };

  console.log(Data);

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
          <div className={styles.container}>
            <input
              type="text"
              value={search}
              onChange={editSearchTerm}
              placeholder="SDL!"
            />
          </div>
        </div>
        {Data.map((shortcut) => {
          if (shortcut.shortcut.toLowerCase().includes(search.toLowerCase())) {
            return (
              <div className={styles.shortcut} key={shortcut.id}>
                <p className={styles.text}>{shortcut.shortcut}</p>
                <p className={styles.text}>{shortcut.explanation}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Glossary;
