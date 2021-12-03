import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Dashboard.module.css";
import fb from "../../images/bfb.png";
import insta from "../../images/binsta.png";
import Simplebutton from "../../components/simpleButton/SimpleButton";
import MySelect from "../../components/userComp/MySelect";
import UniqueTable from "../../components/uniqueTable/UniqueTable";

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
            <MySelect
              title="Age"
              options={["18-25", "26-30", "30-45"]}
              BG="#fff"
              WIDTH="100%"
            />
          </div>
          <MySelect
            title="CLICKS"
            options={["18-25", "26-30", "30-45"]}
            COLOR="#A09DA1"
            BG="#F4F4F4"
          />
          <MySelect
            title="COST PER CLICK"
            options={["something", "something", "something"]}
            COLOR="#A09DA1"
            BG="#F4F4F4"
            WIDTH="200px"
          />
          <MySelect
            title="COST PER CLICK"
            options={["something", "something", "something"]}
            COLOR="#A09DA1"
            BG="#F4F4F4"
            WIDTH="200px"
          />
          <div className={styles.topRight}>
            <div className={styles.topPart}>
              <span>Select your conversion</span>
              <MySelect
                options={["something", "something", "something"]}
                COLOR="#A09DA1"
                BG="#fff"
                WIDTH="330px"
              />
            </div>
            <div className={styles.bottomLeft}>
              <MySelect
                title="CLICK RATE"
                options={["something", "something", "something"]}
                COLOR="#A09DA1"
                BG="#F4F4F4"
                WIDTH="130px"
              />
              <MySelect
                title="TOTAL SPEND"
                options={["something", "something", "something"]}
                COLOR="#A09DA1"
                BG="#F4F4F4"
                WIDTH="150px"
              />
              <MySelect
                title="REACH"
                options={["something", "something", "something"]}
                COLOR="#475761"
                BG="#E3E3E3"
                WIDTH="130px"
              />
              <MySelect
                title="COST PER REACH"
                options={["18-25", "26-30", "30-45"]}
                COLOR="#475761"
                BG="#E3E3E3"
                WIDTH="200px"
              />
            </div>
          </div>
        </main>
        <div className={styles.subInfo}>
          <h5>ALL CAMPAIGNS</h5>
          <span>
            See your all campaigns and drafts, turn them on or off and dive in
            to details.
          </span>
        </div>
        <div>
          <UniqueTable />
        </div>
      </div>
    </PersistentDrawerLeft>
  );
};

export default Dashboard;
