import React from "react";
import Middle from "../cards/middleCard/Middle";
import styles from "./BlueArea.module.css";
import ico1 from "../../images/ico1.png";
import ico2 from "../../images/ico2.png";
import ico3 from "../../images/ico3.png";
import ico4 from "../../images/ico4.png";
import ico5 from "../../images/ico5.png";
import ico6 from "../../images/ico6.png";
import Mybutton from "../myButton/MyButton";

const Bluearea = () => {
  const data = [
    {
      image: ico1,
      title: "SMBs & Startups",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    },
    {
      image: ico2,
      title: "E-Commerce Brands",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    },
    {
      image: ico3,
      title: "SMBs & Startups",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: ico4,
      title: "Affiliate Marketers",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: ico5,
      title: "Dropshippers",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      image: ico6,
      title: "Enterprises",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className={styles.blueArea}>
      <h3 className={styles.h3}>No matter</h3>
      <h2 className={styles.h2}>your business type or goal</h2>
      <p className={styles.p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className={styles.cardArea}>
        {data.map((el, i) => (
          <Middle key={i} ico={el.image} title={el.title} desc={el.desc} />
        ))}
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
};

export default Bluearea;
