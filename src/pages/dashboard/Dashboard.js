import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Dashboard.module.css";
import fb from "../../images/bfb.png";
import insta from "../../images/binsta.png";

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
      </div>
    </PersistentDrawerLeft>
  );
};

export default Dashboard;
