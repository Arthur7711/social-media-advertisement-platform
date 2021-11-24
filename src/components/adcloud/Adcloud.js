import React from "react";
import Myblocks from "../blockTypes/MyBlocks";
import SimpleInput from "../simpleInput/SimpleInput";
import RangeSlider from "../userComp/myRange";
import styles from "./Adcloud.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Simplebutton from "../simpleButton/SimpleButton";
import SerachInput from "../userComp/SearchInput";
import SearchSelection from "../userComp/SearchSelection";

const Adcloud = () => {
  const [activeEl, setActiveEl] = React.useState(0);

  const objs = [
    {
      title: "Manual Adcloud Setup",
      desc: "  For receiving as many visitors as possible to your website.  ",
    },
    {
      title: "Adcloud A.I Audience Finder",
      desc: "  For receiving conversions on your website, must have Facebook Pixel installed.  ",
    },
    {
      title: "Retargeting Audience",
      desc: "  For receiving comments, likes and other type of engagement on your ads/posts.  ",
    },
  ];

  return (
    <>
      <div className={styles.adcloud}>
        <div className={styles.choice}>
          <Myblocks
            objs={objs}
            activeEl={activeEl}
            setActiveEl={(el) => setActiveEl(el)}
          />
        </div>
        <div className={styles.choice}>
          <main className={styles.mainParth}>
            <h2 className={styles.h}>Manual Adcloud Setup</h2>
            <div className={styles.location}>
              <h2 className={styles.h}>Location</h2>
            </div>
            <div className={styles.opt}>
              <select name="types">
                <option value="Includes">Includes</option>
                <option value="exclude">exclude</option>
              </select>
              <SearchSelection />
            </div>
            <div className={styles.choice}>
              <div className={styles.location}>
                <p className={styles.p}>Age Range</p>
                <RangeSlider />
              </div>
              <div className={styles.location}>
                <p className={styles.p}>Gender</p>
                <div className={styles.labsArea}>
                  <label className={styles.labs}>
                    <input type="checkbox" /> Male
                  </label>
                  <label className={styles.labs}>
                    <input type="checkbox" /> Female
                  </label>
                </div>
              </div>
            </div>
            <p className={styles.p}>Detailed Targeting</p>
            <div className={styles.beet}>
              <h3 className={styles.ccc}>Youth</h3>
              <div className={styles.choice}>
                <h3 style={{ marginRight: 10, color: "#A09DA1", fontSize: 16 }}>
                  Custom adcloud
                </h3>
                <HighlightOffIcon color="disabled" />
              </div>
            </div>
            <h4 className={styles.txt}>Include people WHO match</h4>
            <div className={styles.choice}>
              <SimpleInput
                plac="Add adcloud, demographics, interest or behaviours"
                WIDTH="650px"
              />
              <Simplebutton
                WIDTH="100px"
                text="Browse"
                color="#fff"
                BG="#1DAAFF"
              />
            </div>
            <div className={styles.searchPart}>
              <p className={styles.p}>Adcloud Language</p>
              <div className={styles.searchCombine}>
                <Simplebutton
                  text="Target All Languages"
                  COLOR="#fff"
                  BG="#1DAAFF"
                />
              </div>
              <SerachInput />
            </div>
            <div className={styles.searchPart}>
              <p className={styles.p}>Adcloud Name</p>
              <SimpleInput plac="Write a adcloud name " WIDTH="98%" />
            </div>
          </main>
        </div>
      </div>
      <div className={styles.underBTN}>
        <Simplebutton text="Next step" COLOR="#fff" BG="#1DAAFF" />
      </div>
    </>
  );
};

export default Adcloud;
