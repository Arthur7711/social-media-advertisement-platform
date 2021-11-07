import React from "react";
import Narrow from "../../components/cards/narrowCard/Narrow";
import Tall from "../../components/cards/tallCard/Tall";
import Header from "../../components/header/Header";
import Myfooter from "../../components/myFooter/MyFooter";
import Workersarea from "../../components/workersArea/WorkersArea";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const data = [
    "Lorem Ipsum is simply dummy text of the printing and?",
    "Lorem Ipsum is simply dummy text of the printing and?",
    "Lorem Ipsum is simply dummy text of the printing and?",
    "Lorem Ipsum is simply dummy text of the printing and?",
    "Lorem Ipsum is simply dummy text of the printing and?",
    "Lorem Ipsum is simply dummy text of the printing and?",
    "Lorem Ipsum is simply dummy text of the printing and?",
  ];
  return (
    <div>
      <Header />
      <main className={styles.mainText}>
        <h1>Great ad performance. Unbelievable Pricing.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </main>
      <div className={styles.cardsArea}>
        <Tall
          title="Starter"
          subtitle="AI Audience Finder"
          texts={[
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
          ]}
          money="50$/month"
          COLOR="#8081EA"
          BG=""
        />
        <Tall
          title="Ultimate"
          subtitle="AI Audience Finder"
          texts={[
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
          ]}
          money="100$/month"
          COLOR="#fff"
          BG="linear-gradient(113.54deg, rgba(0, 87, 146, 0.35) 0%, rgba(0, 87, 146, 0.4) 0%, #2FABFF 0.01%, #04118A 73.04%)"
          HEIGHT="650px"
        />
        <Tall
          title="Starter"
          subtitle="AI Audience Finder"
          texts={[
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
            "Lorem Ipsum is simply",
          ]}
          money="250$/month"
          COLOR="#04118A"
          BG=""
        />
      </div>
      <h2 className={styles.subTit}>You Might Be Wondering…</h2>
      <p className={styles.subInfo}>Some Frequently Asked Questions (FAQ):</p>
      <section className={styles.sect}>
        {data.map((el, i) => (
          <Narrow key={i} text={el} />
        ))}
      </section>
      <Workersarea />
      <Myfooter />
    </div>
  );
}
