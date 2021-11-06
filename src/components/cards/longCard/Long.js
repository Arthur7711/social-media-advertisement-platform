import React from "react";
import styles from "./Long.module.css";

export default function Long({ text, SRC, desc }) {
  return (
    <div className={styles.long}>
      <div className={styles.imgArea}>
        <img alt="paragraph" src={SRC} />
      </div>
      <div>
        <h2>{text}</h2>
        <h6>{desc}</h6>
      </div>
    </div>
  );
}
