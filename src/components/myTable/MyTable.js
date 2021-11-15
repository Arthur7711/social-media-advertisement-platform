import React from "react";
import Simplebutton from "../simpleButton/SimpleButton";
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
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.invoice}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.price}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.date}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            <Simplebutton COLOR="#fff" BG="#1DAAFF" text="Download pdf" />
          </div>
        </>
      ))}
    </div>
  );
}
