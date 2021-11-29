import React from "react";
import styles from "./Long.module.css";

export default function Long({ title, SRC, desc, BG, COLOR,clicked,setDoesSelected }) {
  return (
    <div
      style={{
        background: BG ? BG : "#fff",
      }}
      className={styles.long}
      onClick={()=>setDoesSelected(clicked)}
    >
      <div
        className={styles.imgArea}
        style={{
          background: "#D1E8FF",
        }}
      >
        <img alt="paragraph" src={SRC} />
      </div>
      <div className={styles.texts}>
        <h2 style={{ color: COLOR ? COLOR : "#04118a" }}>{title}</h2>
        <h6 style={{ color: COLOR ? COLOR : "#000" }}>{desc}</h6>
      </div>
    </div>
  );
}
