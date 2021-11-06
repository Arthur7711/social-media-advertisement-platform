import React from "react";
import Long from "../../components/cards/longCard/Long";
import Header from "../../components/header/Header";
import Mybutton from "../../components/myButton/MyButton";
import styles from "./Features.module.css";
import img1 from "../../images/ico3.png";
import img2 from "../../images/icon7.png";
import img3 from "../../images/icon8.png";
import img4 from "../../images/icon9.png";
import img5 from "../../images/icon10.png";
import Mainarea from "../../components/mainArea/MainArea";
import SecBlue from "../../components/secBlue/SecBlue";

export default function Features() {
  const data = [
    {
      image: img1,
      title: "Quick Ads",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      doesSelected: true,
    },
    {
      image: img2,
      title: "Discover Platforms",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      doesSelected: null,
    },
    {
      image: img3,
      title: "Gain Visibility",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      doesSelected: null,
    },
    {
      image: img4,
      title: "Automate Audience",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      doesSelected: null,
    },
    {
      image: img5,
      title: "Save & Collaborate",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      doesSelected: null,
    },
  ];
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
      <div className={styles.featNav}>
        <div className={styles.nav}>
          {data.map((el, i) => (
            <Long key={i} title={el.title} SRC={el.image} desc={el.desc} doesSelected={el.doesSelected} />
          ))}
        </div>
        <div className={styles.mainAreaPart}>
          <Mainarea />
        </div>
      </div>
      <SecBlue />
    </div>
  );
}
