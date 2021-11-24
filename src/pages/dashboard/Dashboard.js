import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Dashboard.module.css";
import fb from "../../images/bfb.png";
import insta from "../../images/binsta.png";
import Simplebutton from "../../components/simpleButton/SimpleButton";
import Simpleselect from "../../components/simpleSelect/SimpleSelect";

const Dashboard = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.dash}>
        <div className={styles.blueTitles}>
          <img width="18px" height="18px" alt="bf" src={fb} />
          <span>Facebook / </span>
          <img width="18px" height="18px" alt="insta" src={insta} />
          <span> Instagram </span>
        </div>
        <div className={styles.subInfo}>
          <h5>ACCOUNT OVERVIEW</h5>
          <Simplebutton
            text="New"
            COLOR="#fff"
            BG="linear-gradient(92.21deg, #005792 6.65%, #04118A 106.65%)"
            WIDTH="100px"
          />
          <span>Aee your data and compare them with each other.</span>
        </div>
        <div>{/* charts will be here */}</div>
        <div className={styles.subInfo}>
          <h5>ACCOUNT BREAKDOWN VIEW</h5>
          <Simplebutton
            text="New"
            COLOR="#fff"
            BG="linear-gradient(92.21deg, #005792 6.65%, #04118A 106.65%)"
            WIDTH="100px"
          />
          <span>
            See which age, gender, countries, regions and platforms are bringing
            you the best results.
          </span>
        </div>
        <main className={styles.choise}>
          <div className={styles.age}>
            <h3>BREAKDOWN</h3>
            <select name="age">
              <option value="Age">Age</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <Simpleselect title="CLICKS" COLOR="#A09DA1" BG="#F4F4F4" />
          <Simpleselect title="COST PER CLICK" COLOR="#A09DA1" BG="#F4F4F4" />
          <Simpleselect title="COST PER CLICK" COLOR="#A09DA1" BG="#F4F4F4" />
        </main>
      </div>
    </PersistentDrawerLeft>
  );
};

export default Dashboard;
