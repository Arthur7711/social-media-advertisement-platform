import React from "react";
import styles from "./Narrow.module.css";
import plus from "../../../images/plus.png";
import { PropTypes } from "prop-types";

function Narrow({ text }) {
  return (
    <div className={styles.narrow}>
      <span className={styles.text}>{text}</span>
      <img width="24px" height="24px" alt="plus" src={plus} />
    </div>
  );
}

Narrow.propTypes = {
  text:PropTypes.string
}

export default Narrow;
