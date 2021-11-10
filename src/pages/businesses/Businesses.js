import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Businesses.module.css";

const Businesses = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.bus}>Businesses</div>
    </PersistentDrawerLeft>
  );
};

export default Businesses;
