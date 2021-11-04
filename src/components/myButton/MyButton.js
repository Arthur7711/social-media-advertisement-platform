import React from "react";
import styles from "./MyButton.module.css";

const Mybutton = ({ title, BG, ico, COLOR, imgColor }) => {
  return (
    <button style={{ background: BG }} className={styles.myBtn}>
      <span style={{ color: COLOR }}>{title}</span>
      <div
        style={{ width: 24, height: 20, color: imgColor ? imgColor : "#fff" }}
      >
        {ico}
      </div>
    </button>
  );
};

export default Mybutton;
