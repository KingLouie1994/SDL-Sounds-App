import React from "react";
import styles from "./SoundsContainer.module.css";

import Cards from "../Cards/Cards";

const SoundsContainer = () => {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};

export default SoundsContainer;
