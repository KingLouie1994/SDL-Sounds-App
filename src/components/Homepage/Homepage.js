import React from "react";
import styles from "./Homepage.module.css";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Link to="/sounds">
        <button className={styles.link}>Sounds</button>
      </Link>
      <Link to="glossar">
        <button className={styles.link}>Glossar</button>
      </Link>
    </div>
  );
};

export default Homepage;
