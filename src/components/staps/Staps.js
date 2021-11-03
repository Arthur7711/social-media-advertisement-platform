import React from "react";
import styles from "./Staps.module.css";
import steps from "../../images/steps.png";

const Staps = () => {
  return (
    <div className={styles.steps}>
      <div className={styles.imageArea}>
        <img alt="steps" src={steps} />
      </div>
    </div>
  );
};

export default Staps;
