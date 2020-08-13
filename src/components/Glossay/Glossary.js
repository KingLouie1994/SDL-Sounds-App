import React, { useState } from "react";

import styles from "./Glossary.module.css";
import Data from "./Data";
// import Filter from "../Filter/Filter";

import { Link } from "react-router-dom";

import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import SearchIcon from "@material-ui/icons/Search";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
  },
})(TextField);

const Glossary = () => {
  // const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  // const fromAToZ = (a, b) => {
  //   if (a.id < b.id) {
  //     return -1;
  //   } else if (a.id > b.id) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // };

  // const fromZToA = (a, b) => {
  //   if (a.id > b.id) {
  //     return -1;
  //   } else if (a.id < b.id) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // };

  // const handleSortChange = (e) => {
  //   setSort(e.target.value);
  //   if (e.target.value === "zToA") {
  //     Data.sort(fromZToA);
  //   } else {
  //     Data.sort(fromAToZ);
  //   }
  // };

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
          {/* <div className={styles.filter}>
            <Filter handleSortChange={handleSortChange} />
          </div> */}
          <CssTextField
            type="text"
            value={search}
            onChange={editSearchTerm}
            className={styles.searchInput}
            id="custom-css-standard-input"
            label="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
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
