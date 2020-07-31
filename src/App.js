import React from "react";
import styles from "./App.module.css";

import { Route } from "react-router-dom";

import SoundsContainer from "./components/SoundsContainer/SoundsContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Route exact path="/sounds" component={SoundsContainer} />
    </div>
  );
}

export default App;
