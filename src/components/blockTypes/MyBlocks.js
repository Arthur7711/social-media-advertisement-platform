import React from "react";
import styles from "./MyBlocks.module.css";

const Myblocks = ({ activeEl, setActiveEl,objs }) => {

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
