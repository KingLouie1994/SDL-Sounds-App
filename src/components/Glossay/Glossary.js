import React, { useState } from "react";

import styles from "./Glossary.module.css";
import Data from "./Data";
import Filter from "../Filter/Filter";

import { Link } from "react-router-dom";

import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import SearchIcon from "@material-ui/icons/Search";

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
          <div className={styles.filter}>
            <Filter handleSortChange={handleSortChange} />
          </div>
          <div className={styles.search}>
            <SearchIcon />:
            <input
              className={styles.searchInput}
              type="text"
              value={search}
              onChange={editSearchTerm}
              placeholder="Search..."
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
          }
          //else if (
          //   shortcut.explanation.toLowerCase().includes(search.toLowerCase())
          // ) {
          //   return (
          //     <div className={styles.shortcut} key={shortcut.id}>
          //       <p className={styles.text}>{shortcut.shortcut}</p>
          //       <p className={styles.text}>{shortcut.explanation}</p>
          //     </div>
          //   );
          // }
          else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Glossary;
