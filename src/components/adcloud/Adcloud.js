import React from "react";
import Myblocks from "../blockTypes/MyBlocks";
import styles from "./Adcloud.module.css";

const Adcloud = () => {
  const [activeEl, setActiveEl] = React.useState(0);

  const objs = [
    {
      title: "Manual Adcloud Setup",
      desc: "  For receiving as many visitors as possible to your website.  ",
    },
    {
      title: "Adcloud A.I Audience Finder",
      desc: "  For receiving conversions on your website, must have Facebook Pixel installed.  ",
    },
    {
      title: "Retargeting Audience",
      desc: "  For receiving comments, likes and other type of engagement on your ads/posts.  ",
    },
  ];

  return (
    <div className={styles.adcloud}>
      <div className={styles.choice}>
        <Myblocks
          objs={objs}
          activeEl={activeEl}
          setActiveEl={(el) => setActiveEl(el)}
        />
      </div>
      <main className={styles.mainParth}>
        <h2 className={styles.h}>Manual Adcloud Setup</h2>
        <div className={styles.location}>
          <h2 className={styles.h}>Location</h2>
        </div>
      </main>
    </div>
  );
};

export default Adcloud;
