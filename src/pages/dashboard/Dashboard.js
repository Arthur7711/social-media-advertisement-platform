import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.dash}>Dashboard</div>
    </PersistentDrawerLeft>
  );
};

export default Dashboard;
