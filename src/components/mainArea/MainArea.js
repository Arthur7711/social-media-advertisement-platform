import React from "react";
import styles from "./MainArea.module.css";
import mainPhoto from "../../images/menu.png";
import Mybutton from "../myButton/MyButton";

const Mainarea = () => {
  return (
    <div className={styles.all}>
      <div className={styles.mainArea}>
        <h3>t's time to create</h3>
        <h2>the ad you need!</h2>
        <p>
          Create ads on Facebook, Instagram and Google. Keep in mind that a new
          platform is added every month!
        </p>
        <main className={styles.main}>
          <div>
            <div className={styles.photoArea}>
              <img alt="main" src={mainPhoto} />
            </div>
            <h2>Ready to create your first ad?</h2>
            <p>Create the ad you need, in the smartest way possible.</p>
          </div>
        </main>
        <div className={styles.btnArea}>
          <Mybutton
            title="Get started"
            HREF='/register'
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Mainarea;
