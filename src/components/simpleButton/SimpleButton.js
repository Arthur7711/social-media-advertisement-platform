import React from "react";

const Simplebutton = ({ COLOR, BG, text, WIDTH, BORDERCOLOR, clickFN }) => {
  return (
    <button
      onClick={() => clickFN && clickFN()}
      style={{
        borderRadius: "6px",
        color: COLOR,
        background: BG,
        padding: "10px 20px",
        border: BORDERCOLOR ? `1px solid ${BORDERCOLOR}` : "none",
        height: 42,
        cursor: "pointer",
        width: WIDTH,
      }}
    >
      {text}
    </button>
  );
};

export default Simplebutton;
