import React from "react";
import Tall from "../cards/tallCard/Tall";
import styles from "./PaymantPart.module.css";

const Paymantpart = () => {
  return (
    <div className={styles.paymant}>
      <h3>Affordable pricing</h3>
      <h2>Great ad performance...</h2>
      <p className={styles.p}>
        Whether you are a marketer or a business owner, we have a plan to suit
        your needs. 7-days free trial. Cancel anytime.
      </p>
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
      <p className={styles.footBar}>Monthly prices, paid annually.</p>
    </div>
  );
};

export default Paymantpart;
