import React from "react";
import styles from "./MediaSoc.module.css";

const Mediasoc = ({ ico, text }) => {
  return (
    <div className={styles.media}>
      <div style={{ width: 32, height: 32 }}>
        <img src={ico} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Mediasoc;
