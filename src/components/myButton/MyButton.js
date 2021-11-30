import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./MyButton.module.css";

const Mybutton = ({
  title,
  BG,
  ico,
  COLOR,
  imgColor,
  WIDTH,
  HREF,
  clickFN,
}) => {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        clickFN && clickFN();
        history.push(HREF);
      }}
      style={{ background: BG, width: WIDTH }}
      className={styles.myBtn}
    >
      <span style={{ color: COLOR }}>{title}</span>
      <div
        style={{
          width: 24,
          height: 20,
          color: imgColor ? imgColor : "#fff",
          marginLeft: ico ? 10 : 0,
        }}
      >
        {ico}
      </div>
    </button>
  );
};

export default Mybutton;
