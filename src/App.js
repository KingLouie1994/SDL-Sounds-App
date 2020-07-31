import React from "react";
import styles from "./App.module.css";

import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import SoundsContainer from "./components/SoundsContainer/SoundsContainer";
import Glossary from "./components/Glossay/Glossary";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sounds" component={SoundsContainer} />
      <Route exact path="/glossar" component={Glossary} />
    </div>
  );
}

export default App;
