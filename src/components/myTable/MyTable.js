import React from "react";
import styles from "./MyTable.module.css";

export default function MyTable({ titles, datas }) {
  return (
    <div className={styles.my}>
      {titles.map((el) => (
        <p key={el} className={styles.p}>
          {el}
        </p>
      ))}
      {datas.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
}
