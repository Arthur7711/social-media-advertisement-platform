import React from "react";

const Simplebutton = ({ COLOR, BG, text }) => {
  return (
    <button
      style={{
        borderRadius: "6px",
        color: COLOR,
        background: BG,
        padding: "10px 20px",
        border: "none",
        height: 42,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Simplebutton;
