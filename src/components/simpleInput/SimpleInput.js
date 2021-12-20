import React from "react";
import { PropTypes } from "prop-types";

function SimpleInput({ plac, WIDTH, COLOR, TYPE, data, onchange }) {
  return (
    <input
      type={TYPE ? TYPE : "text"}
      placeholder={plac}
      value={data}
      onChange={(e) => onchange(e)}
      style={{
        border: "1px solid #F4F4F4",
        boxSizing: "border-box",
        borderRadius: 6,
        height: 40,
        width: WIDTH,
        margin: "10px",
        paddingLeft: 15,
        color: COLOR,
      }}
    />
  );
}

SimpleInput.propTypes = {
  plac: PropTypes.string,
  WIDTH: PropTypes.string,
  COLOR: PropTypes.string,
  TYPE: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  data: PropTypes.string,
  onchange: PropTypes.func,
};

export default SimpleInput;
