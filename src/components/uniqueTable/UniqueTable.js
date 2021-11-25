import React from "react";
import styles from "./UniqueTable.module.css";
import Simplebutton from "../simpleButton/SimpleButton";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Uniquetable = () => {
  return (
    <main>
      <div className={styles.top}>
        <div className={styles.topBtn}>
          <Simplebutton
            text="CREATE A NEW CAMPAKIGN"
            BG="linear-gradient(92.21deg, #005792 6.65%, #04118A 106.65%)"
            COLOR="#fff"
          />
          <Simplebutton BG="#F4F4F4" text="TURN ON" COLOR="#A09DA1" />
          <Simplebutton BG="#F4F4F4" text="TURN OFF" COLOR="#A09DA1" />
          <Simplebutton BG="#F4F4F4" text="DUBLICATE" COLOR="#A09DA1" />
        </div>
        <div className={styles.searchPart}>
          <input placeholder="Type name or id to filter" />
          <IconButton style={{ position: "absolute", right: 15, top: 3 }}>
            <SearchIcon color="primary" />
          </IconButton>
        </div>
      </div>
      <div className={styles.table}>
        
      </div>
    </main>
  );
};

export default Uniquetable;
