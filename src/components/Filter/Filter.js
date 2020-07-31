import React from "react";
import styles from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <label className={styles.label}>
          Sortieren:
          <select
            value={props.sort}
            onChange={props.handleSortChange}
            className={styles.select}
          >
            <option value="">...</option>
            <option value="aToZ">A bis Z</option>
            <option value="zToA">Z bis A</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
