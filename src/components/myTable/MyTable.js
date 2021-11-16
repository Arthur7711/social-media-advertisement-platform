import React from "react";
import Simplebutton from "../simpleButton/SimpleButton";
import styles from "./MyTable.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";

export default function MyTable({ titles, datas }) {
  return (
    <div className={styles.my}>
      {titles.map((el) => (
        <p key={el} className={styles.p}>
          {el}
        </p>
      ))}
      {datas.map((el) => (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.invoice || el.name}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.price || el.email}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.date || el.business}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#005792",
              padding: 10,
              fontSize: 12,
              border: "1px solid #F4F4F4",
            }}
          >
            {el.downloader ? (
              <Simplebutton COLOR="#fff" BG="#1DAAFF" text="Download pdf" />
            ) : (
              <IconButton>
                <HighlightOffIcon sx={{ color: "red" }} />
              </IconButton>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
