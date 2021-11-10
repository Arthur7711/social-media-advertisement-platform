import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.int}>Introduction</div>
    </PersistentDrawerLeft>
  );
};

export default Introduction;
