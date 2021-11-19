import React from "react";
import styles from "./MyBlocks.module.css";

const Myblocks = ({ activeEl, setActiveEl }) => {
  const objs = [
    {
      title: "Traffic to my website",
      desc: " For receiving as many visitors as possible to your website. ",
    },
    {
      title: "Conversions on my website",
      desc: "  For receiving conversions on your website, must have Facebook Pixel installed.  ",
    },
    {
      title: "Likes and Comments on my posts",
      desc: "  For receiving comments, likes and other type of engagement on your ads/posts.  ",
    },
    {
      title: "Generate Leads with Lead Forms",
      desc: "  For collecting customer details (name, email, phone...) without needing a website.  ",
    },
    {
      title: "Catalog Sales",
      desc: "  For advertising your e-commerce products, you must have a Facebook Product Catalog.  ",
    },
  ];

  return (
    <>
      {objs.map((el, i) => (
        <div
          key={i}
          onClick={()=>setActiveEl(i)}
          style={{
            width: 200,
            height: 200,
            background: activeEl === i ? "#1DAAFF" : "#f4f4f4",
          }}
          className={styles.myblock}
        >
          <h3 style={{ color: activeEl === i ? "#fff" : "#a09da1" }}>
            {el.title}
          </h3>
          <p style={{ color: activeEl === i ? "#fff" : "#005792" }}>
            {el.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default Myblocks;
