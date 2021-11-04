import React from "react";
import styles from "./WorkersArea.module.css";
import scop from "../../images/scopes.png";
import p1 from "../../images/user1.png";
import p2 from "../../images/user2.png";
import p3 from "../../images/user3.png";

const Workersarea = () => {
  return (
    <div className={styles.workers}>
      <h2>What ADcloud</h2>
      <b>Clients are saying</b>
      <div className={styles.workPart}>
        <div className={styles.worker}>
          <div className={styles.sms}>
            <img alt="scopes" src={scop} />
            <span className={styles.title}>Running Ads Simplified</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry
            </p>
          </div>
          <img className={styles.imgUser} alt="person" src={p1} />
        </div>
        <div className={styles.worker}>
          <div className={styles.sms}>
            <img alt="scopes" src={scop} />
            <span className={styles.title}>Running Ads Simplified</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry
            </p>
          </div>
          <img className={styles.imgUser} alt="person" src={p2} />
        </div>
        <div className={styles.worker}>
          <div className={styles.sms}>
            <img alt="scopes" src={scop} />
            <span className={styles.title}>Running Ads Simplified</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry
            </p>
          </div>
          <img className={styles.imgUser} alt="person" src={p3} />
        </div>
      </div>
    </div>
  );
};

export default Workersarea;
