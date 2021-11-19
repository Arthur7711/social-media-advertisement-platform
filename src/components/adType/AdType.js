import React from "react";
import Myblocks from "../blockTypes/MyBlocks";
import styles from "./AdType.module.css";

const Adtype = () => {
  const [activeEl, setActiveEl] = React.useState(0);

  const objs = [
    {
      title: "Single Image / Video",
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
    {
      title: "Carousel",
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
    {
      title: "Story",
      desc: "  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
    {
      title: "Existing Post",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
    },
  ];

  return (
    <div className={styles.adtype}>
      <div className={styles.choice}>
        <Myblocks
          objs={objs}
          activeEl={activeEl}
          setActiveEl={(el) => setActiveEl(el)}
        />
      </div>
    </div>
  );
};

export default Adtype;
