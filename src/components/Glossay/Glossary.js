import React, { useState } from "react";
import styles from "./Glossary.module.css";
import Data from "./Data";
import Filter from "../Filter/Filter";

import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

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

  const classes = useStyles();

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
          <div>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="Suche">Suche</InputLabel>
              <Input
                className={styles.searchInput}
                type="text"
                value={search}
                onChange={editSearchTerm}
                id="Suche"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
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
