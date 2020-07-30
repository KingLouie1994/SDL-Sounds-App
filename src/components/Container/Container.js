import React from "react";
import styles from "./Container.module.css";

import Header from "../Header/Header";
import Cards from "../Cards/Cards";

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Cards />
    </div>
  );
};

export default Container;
