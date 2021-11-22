import React from "react";
import styles from "./ReviewPublish.module.css";
import SimpleInput from "../simpleInput/SimpleInput";
import Simplebutton from "../simpleButton/SimpleButton";

const Reviewpublish = () => {
  return (
    <>
      <div className={styles.choice}>
        <main className={styles.mainParth}>
          <div className={styles.left}>
            <p className={styles.p}>Budget</p>
            <div>
              <label className={styles.lab}>
                <input type="text" /> USD
              </label>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <label>
                <span className={styles.thisSpan}>Start Date</span>
                <SimpleInput TYPE="date" WIDTH="250px" />
              </label>
            </div>
            <div>
              <label>
                <span className={styles.thisSpan}>Start Date</span>
                <SimpleInput WIDTH="250px" />
              </label>
            </div>
          </div>
        </main>
      </div>
      <div className={styles.btnArea}>
        <Simplebutton
          text="Save as draftxt"
          BG="#42CC23"
          COLOR="#fff"
          WIDTH="170px"
        />
        <Simplebutton
          text="Publish now"
          BG="#1DAAFF"
          COLOR="#fff"
          WIDTH="170px"
        />
      </div>
    </>
  );
};

export default Reviewpublish;
