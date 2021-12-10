import React, { useState } from "react";
import styles from "./UniqueTable.module.css";
import Simplebutton from "../simpleButton/SimpleButton";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import MySelect from "../userComp/MySelect";
import changes from "../../images/changes.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "../userComp/Pagination";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Uniquetable = ({ portalData }) => {
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
      <main className={styles.table}>
        <div className={styles.headTable}>
          <div style={{ width: 60 }} className={styles.myTable}>
            <Checkbox {...label} defaultChecked color="default" />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <MySelect
              title="Status"
              options={["someting"]}
              BG="#F4F4F4"
              COLOR="#A09DA1"
              WIDTH="110px"
            />
          </div>
          <div style={{ width: 250 }} className={styles.myTable}>
            <Simplebutton
              text="Name"
              BG="#F4F4F4"
              COLOR="#A09DA1"
              WIDTH="230px"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <Simplebutton
              text="Details"
              BG="#F4F4F4"
              COLOR="#A09DA1"
              WIDTH="90%"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <Simplebutton
              text="Budget"
              BG="#F4F4F4"
              COLOR="#A09DA1"
              WIDTH="90%"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <MySelect
              title="Result"
              options={["someting"]}
              BG="#F4F4F4"
              COLOR="#A09DA1"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <MySelect
              title="Impressions"
              options={["someting"]}
              BG="#F4F4F4"
              COLOR="#A09DA1"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <MySelect
              title="Clicks"
              options={["someting"]}
              BG="#F4F4F4"
              COLOR="#A09DA1"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <MySelect
              title="CPC"
              options={["someting"]}
              BG="#F4F4F4"
              COLOR="#A09DA1"
            />
          </div>
          <div style={{ width: 130 }} className={styles.myTable}>
            <MySelect
              title="Spend"
              options={["someting"]}
              BG="#F4F4F4"
              COLOR="#A09DA1"
            />
          </div>
          <div style={{ width: 35 }} className={styles.imgBox}>
            <IconButton>
              <img alt="changeMaker" src={changes} />
            </IconButton>
          </div>
        </div>
        {portalData.map((el) => (
          <div key={el.id} className={styles.bodyTable}>
            <div
              style={{ width: 60, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              <Checkbox {...label} defaultChecked color="default" />
            </div>
            <div
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
            </div>
            <p
              style={{ width: 250, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.name}
            </p>
            <div
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              <IconButton>
                <svg
                  width="15"
                  height="21"
                  viewBox="0 0 15 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="12" width="3" height="9" fill="#1DAAFF" />
                  <rect x="6" y="7" width="3" height="14" fill="#1DAAFF" />
                  <rect x="12" width="3" height="21" fill="#1DAAFF" />
                </svg>
              </IconButton>
            </div>
            <p
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.budget}
            </p>
            <p
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.result}
            </p>
            <p
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.impressions}
            </p>
            <p
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.clicks}
            </p>
            <p
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.CPC}
            </p>
            <p
              style={{ width: 130, borderRight: "1px solid #dde1eb" }}
              className={styles.p}
            >
              {el.spend}
            </p>
            <div style={{ width: 35 }} className={styles.p}>
              <IconButton>
                <MoreVertIcon color="primary" />
              </IconButton>
            </div>
          </div>
        ))}
        <Pagination />
      </main>
    </main>
  );
};

export default Uniquetable;
