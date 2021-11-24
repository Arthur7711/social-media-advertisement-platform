import React from "react";

const Simpleselect = ({ title, options, BG, COLOR, WIDTH }) => {
  return (
    <select
      name={title}
      style={{
        background: BG ? BG : "#ffffff",
        borderRadius: 6,
        color: COLOR ? COLOR : "#a09da1",
        width: WIDTH ? WIDTH : "auto",
        height: 40,
        border: "none",
        outline: "none",
      }}
    >
      <option value={title}>{title}</option>
      {options && options.map((el) => <option value={el}>{el}</option>)}
    </select>
  );
};

export default Simpleselect;
