import React from "react";
import Mybutton from "../myButton/MyButton";
import Slider from "../slider/Slider";
import styles from "./SecBlue.module.css";

export default function SecBlue() {
  const data = [
    {
      title: "Become a",
      subTitle: "full stack marketer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ddvv ",
    },
    {
      title: "Design ads",
      subTitle: "with Canva or Crello",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ddvv ",
    },
    {
      title: "Learn & improve",
      subTitle: "Your skills",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ddvv ",
    },
    {
      title: "Edit & Dublicate",
      subTitle: "Faster",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ddvv ",
    },
  ];
  return (
    <div className={styles.sec}>
      <h3 className={styles.h3}>ADcloud is</h3>
      <h2 className={styles.h2}>packed with features</h2>
      <p className={styles.p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div>
        <Slider data={data} />
      </div>
      <div className={styles.btnPart}>
        <Mybutton
          imgColor="#04118A"
          COLOR="#04118A"
          BG="#fff"
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
  );
}
