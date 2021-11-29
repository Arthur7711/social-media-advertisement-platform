import React from "react";
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
    <div style={{ background: BGCOLOR }} className={styles.small} onClick={()=>workState(myState)}>
      <h2 style={{ color: COLOR }}>{title}</h2>
      <p style={{ color: COLOR }}>{description}</p>
    </div>
  );
};

export default Smallcard;
