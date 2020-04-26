import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import styles from "./App.module.css";

const App = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default App;
