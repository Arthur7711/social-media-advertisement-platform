import React from "react";
import { PropTypes } from "prop-types";
import styles from "./MyLabel.module.css";

const Mylabel = ({ name, type, plat, data, onchange }) => {
  return (
    <div className={styles.dv}>
      <label htmlFor={name}>
        <div>
          <p>
            {name}
            <span>*</span>
          </p>
          <input
            onChange={(e) => onchange(e)}
            value={data}
            id={name}
            type={type}
            placeholder={plat}
          />
        </div>
      </label>
    </div>
  );
};

Mylabel.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  plat: PropTypes.string,
  data: PropTypes.string,
  onchange: PropTypes.func,
};

export default Mylabel;
