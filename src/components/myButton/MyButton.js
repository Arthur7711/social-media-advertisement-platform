import React from "react";
import styles from "./MyButton.module.css";

const Mybutton = ({ title, BG, ico, COLOR }) => {
  return (
    <button className={styles.myBtn}>
      <span>{title}</span>
      <div style={{ width: 24, height: 20, color: "#fff" }}>{ico}</div>
    </button>
  );
};

export default Mybutton;
