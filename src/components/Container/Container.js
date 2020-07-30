import React from "react";
import styles from "./Container.module.css";

import Header from "../Header/Header";

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Container;
