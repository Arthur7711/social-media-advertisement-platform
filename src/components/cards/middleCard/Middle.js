import React from "react";
import arrow from "../../../images/arrow.png";
import { PropTypes } from "prop-types";
import styles from "./Middle.module.css";

const Middle = ({ ico, title, desc }) => {
  return (
    <div className={styles.mid}>
      <div className={styles.imageArea}>
        <img src={ico} alt="mid" />
      </div>
      <h2 style={{ color: "#04118a" }}>{title}</h2>
      <p style={{ color: "#475761" }}>{desc}</p>
      <div className={styles.forMIx}>
        <button className={styles.mix}>
          <span>Learn more</span> <img alt="arrow" src={arrow} />
        </button>
      </div>
    </div>
  );
};

Middle.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  ico: PropTypes.string,
};

export default Middle;
