import React from "react";
import Myblocks from "../blockTypes/MyBlocks";
import Simplebutton from "../simpleButton/SimpleButton";
import SimpleInput from "../simpleInput/SimpleInput";
import styles from "./Objective.module.css";

const Objective = () => {
  const [activeEl, setActiveEl] = React.useState(0);
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
    <div className={styles.objective}>
      <div className={styles.selectedArea}>
        <Myblocks objs={objs} activeEl={activeEl} setActiveEl={(el) => setActiveEl(el)} />
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
