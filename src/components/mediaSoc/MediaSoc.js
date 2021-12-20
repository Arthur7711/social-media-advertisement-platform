import React from "react";
import { PropTypes } from "prop-types";
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
Mediasoc.propTypes = {
  ico: PropTypes.string,
  text: PropTypes.string,
};
export default Mediasoc;
