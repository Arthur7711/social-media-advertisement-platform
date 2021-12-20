import React from "react";
import { PropTypes } from "prop-types";
import styles from "./SmallCard.module.css";

const Smallcard = ({
  title,
  description,
  COLOR,
  BGCOLOR,
  myState,
  workState,
}) => {
  return (
    <div
      style={{ background: BGCOLOR }}
      className={styles.small}
      onClick={() => workState(myState)}
    >
      <h2 style={{ color: COLOR }}>{title}</h2>
      <p style={{ color: COLOR }}>{description}</p>
    </div>
  );
};

Smallcard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  BGCOLOR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  COLOR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  myState: PropTypes.number,
  workState: PropTypes.func,
};

export default Smallcard;
