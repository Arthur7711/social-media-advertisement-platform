import React from "react";
import Mybutton from "../../myButton/MyButton";
import styles from "./Tall.module.css";

const Tall = ({ title, subtitle, HEIGHT, texts, money, COLOR, BG }) => {
  return (
    <div
      className={styles.tall}
      style={{
        height: HEIGHT ? HEIGHT : "600px",
        color: COLOR ? COLOR : "#04118A",
        background: BG ? BG : "#fff",
      }}
    >
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <div className={styles.tallChild}>
        {texts.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
      <strong>{money}</strong>
      <div className={styles.btnPart}>
        <Mybutton
          title="Choose"
          COLOR={BG.length < 10 ? BG : "#04118A"}
          BG={COLOR ? COLOR : "#04118A"}
          WIDTH="340px"
        />
      </div>
    </div>
  );
};

export default Tall;
