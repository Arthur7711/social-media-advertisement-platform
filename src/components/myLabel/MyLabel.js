import React from "react";
import styles from "./MyLabel.module.css";

const Mylabel = ({ name, type, plat }) => {
  return (
    <div className={styles.dv}>
      <label htmlFor={name}>
        <div>
          <p>{name}<span>*</span></p>
          <input id={name} type={type} placeholder={plat} />
        </div>
      </label>
    </div>
  );
};

export default Mylabel;
