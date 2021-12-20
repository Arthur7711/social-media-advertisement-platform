import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Long.module.css";

function Long({ title, SRC, desc, BG, COLOR, clicked, setDoesSelected }) {
  return (
    <div
      style={{
        background: BG ? BG : "#fff",
      }}
      className={styles.long}
      onClick={() => setDoesSelected(clicked)}
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

Long.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  SRC: PropTypes.string,
  BG: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  COLOR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  clicked: PropTypes.number,
  setDoesSelected: PropTypes.func,
};

export default Long;
