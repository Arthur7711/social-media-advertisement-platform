import React from "react";
import styles from "./Long.module.css";

export default function Long({ title, SRC, desc, doesSelected }) {
  return (
    <div
      style={{
        background: doesSelected
          ? "linear-gradient(92.21deg, #005792 6.65%, #04118A 106.65%)"
          : "#fff",
      }}
      className={styles.long}
    >
      <div
        className={styles.imgArea}
        style={{
          background: doesSelected ? "#fff" : "#D1E8FF",
        }}
      >
        <img alt="paragraph" src={SRC} />
      </div>
      <div className={styles.texts}>
        <h2 style={{ color: doesSelected ? "#fff" : "#04118a" }}>{title}</h2>
        <h6 style={{ color: doesSelected ? "#fff" : "#000" }}>{desc}</h6>
      </div>
    </div>
  );
}
