import React from "react";
import { PropTypes } from "prop-types";

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

Simplebutton.propTypes = {
  COLOR: PropTypes.string,
  BG: PropTypes.string,
  text: PropTypes.string,
  WIDTH: PropTypes.string,
  BORDERCOLOR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  clickFN: PropTypes.func,
};

export default Simplebutton;
