import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import HorizontalNonLinearStepper from "../../components/userComp/Stepper";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.int}>
        <div className={styles.head}>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 4H14V2L12 0H8L6 2V4H2C0.9 4 0 4.9 0 6V11C0 11.75 0.4 12.38 1 12.73V16C1 17.11 1.89 18 3 18H17C18.11 18 19 17.11 19 16V12.72C19.59 12.37 20 11.73 20 11V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM2 6H18V11H13V8H7V11H2V6ZM11 12H9V10H11V12ZM17 16H3V13H7V14H13V13H17V16Z"
              fill="#005792"
            />
          </svg>
          <h1>Your Businesses</h1>
        </div>
        <p className={styles.p}>
          See your business(es), edit them and create new ones.
        </p>
        <HorizontalNonLinearStepper />
      </div>
    </PersistentDrawerLeft>
  );
};

export default Introduction;
