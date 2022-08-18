import React from "react";
import styles from "./App.module.scss";
import Credit from "./Components/Credit";
import NameCalculator from "./Components/NameCalculator";

function App() {
  return (
    <section className={styles.App}>
      <NameCalculator />
      <Credit />
    </section>
  );
}

export default App;
