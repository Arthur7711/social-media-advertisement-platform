import React from "react";
import Header from "../../components/header/Header";
import Mybutton from "../../components/myButton/MyButton";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <div className={styles.feat}>
      <Header />
      <main className={styles.mainText}>
        <h1>Create, Optimize, Automate And Improve Your Ads.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className={styles.btn}>
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
      </main>
    </div>
  );
}
