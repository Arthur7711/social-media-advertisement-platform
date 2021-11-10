import React from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./TextGenerator.module.css";

const Textgenerator = () => {
  return (
    <PersistentDrawerLeft>
      <div className={styles.tg}>Textgenerator</div>
    </PersistentDrawerLeft>
  );
};

export default Textgenerator;
