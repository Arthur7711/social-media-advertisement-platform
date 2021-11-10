import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Accounts.module.css";

const Accounts = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.acc}>Accounts</div>
    </PersistentDrawerLeft>
  );
};

export default Accounts;
