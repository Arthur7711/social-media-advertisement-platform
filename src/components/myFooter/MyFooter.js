import React from "react";
import styles from "./MyFooter.module.css";
import time from "../../images/ico1.png";
import Mybutton from "../myButton/MyButton";
import logo from "../../images/logo.png";

const Myfooter = () => {
  return (
    <div className={styles.topFoot}>
      <img className={styles.timer} alt="timer" src={time} />
      <div className={styles.topMain}>
        <div className={styles.main}>
          <h1>Ready to get started?</h1>
          <p>Try 100% free during 7 days. Cancel anytime.</p>
          <div className={styles.btnArea}>
            <Mybutton
              title="Get started"
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
      <footer>
        <div>
          <img alt="logo" src={logo} />
          <p>Creating the ad you need has never been easier.</p>
        </div>
        <div className={styles.menuArea}>
          <div className={styles.menuPart}>
            <ul className={styles.first}>
              <span> Pages </span>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
            <ul>
              <span>Use cases</span>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          </div>
          <div>Lorem Ipsum </div>
        </div>
        <hr style={{ color: "#005792", backgroundColor: "#005792" }} />
        <p className={styles.endFooter}>Lorem Ipsum is simply dummy text </p>
      </footer>
    </div>
  );
};

export default Myfooter;
