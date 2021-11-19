import React from "react";
import Myblocks from "../blockTypes/MyBlocks";
import Simplebutton from "../simpleButton/SimpleButton";
import SimpleInput from "../simpleInput/SimpleInput";
import styles from "./Objective.module.css";

const Objective = () => {
  const [activeEl, setActiveEl] = React.useState(0);

  return (
    <div className={styles.objective}>
      <div className={styles.selectedArea}>
        <Myblocks activeEl={activeEl} setActiveEl={(el) => setActiveEl(el)} />
      </div>
      <p className={styles.comp}>Campaign Name</p>
      <div className={styles.sel}>
        <SimpleInput
          plac="Give your ad campaign a name"
          WIDTH="500px"
          COLOR="#C4C4CA"
        />
      </div>
      <div className={styles.sel}>
        <div className={styles.info}>
          <input type="checkbox" />
          <span>
            This campaign is about credit, employment or housing related.
          </span>
          <div>
            <select name="category" className={styles.select}>
              <option value="">Please select your category</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.sel}>
        <Simplebutton COLOR="#fff" BG="#1DAAFF" text="NEXST STEP" />
      </div>
    </div>
  );
};

export default Objective;
