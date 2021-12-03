import React, { useState } from "react";
import PersistentDrawerLeft from "../../components/userComp/headerNav/HeaderNav";
import styles from "./Businesses.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import editIco from "../../images/editIco.png";
import deleteIco from "../../images/deleteIco.png";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][1].toUpperCase()}${name
      .split(" ")[0][2]
      .toUpperCase()}`,
  };
}

const Businesses = () => {
  const [data, setData] = useState([
    { name: "amazon", type: "E-Commerce" },
    { name: "new star", type: "E-Commerce" },
  ]);

  return (
    <PersistentDrawerLeft>
      <div className={styles.bus}>
        <div className={styles.head}>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 4H14V2L12 0H8L6 2V4H2C0.9 4 0 4.9 0 6V11C0 11.75 0.4 12.38 1 12.73V16C1 17.11 1.89 18 3 18H17C18.11 18 19 17.11 19 16V12.72C19.59 12.37 20 11.73 20 11V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM2 6H18V11H13V8H7V11H2V6ZM11 12H9V10H11V12ZM17 16H3V13H7V14H13V13H17V16Z"
              fill="#005792"
            />
          </svg>
          <h1>Your Businesses</h1>
        </div>
        <p className={styles.p}>
          See your business(es), edit them and create new ones.
        </p>
        <h2 className={styles.sub}>YOUR BUSINESS</h2>
        <div className={styles.tb}>
          <div className={styles.topTab}>
            <div className={styles.topMain}>
              <button className={styles.btn}>+ CREATE A NEW BUSINESS</button>
            </div>
            <div className={styles.inps}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Type name or id to filter"
                  // inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  color="primary"
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              <div className={styles.arrows}>
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.657 1.415L4.243 0L0 4.243L4.243 8.486L5.657 7.071L3.829 5.243H10V3.243H3.83L5.658 1.415H5.657Z"
                    fill="#A09DA1"
                  />
                </svg>
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 3.243V5.243H6.172L4.343 7.071L5.757 8.486L10 4.243L5.757 0L4.343 1.415L6.172 3.243H0Z"
                    fill="#ACA9AC"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.tit}>
              <p>Logo</p>
            </div>
            <div className={styles.tit}>
              <p>BUSINESS NAME</p>
            </div>
            <div className={styles.tit}>
              <p>Edit</p>
            </div>
            <div className={styles.tit}>
              <p>CATEGORY</p>
            </div>
            <div className={styles.tit}>
              <p>Delete</p>
            </div>
            {data.map((el,i) => (
              <React.Fragment key={i}>
                <div className={styles.borderDv}>
                  <Stack
                    direction="row"
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Avatar {...stringAvatar(JSON.stringify(el.name))} />
                  </Stack>
                </div>
                <div className={styles.borderDv}>{el.name}</div>
                <div className={styles.borderDv}>
                  <IconButton>
                    <img alt="edit" src={editIco} />
                  </IconButton>
                </div>
                <div className={styles.borderDv}>
                  <p>{el.type}</p>
                </div>
                <div className={styles.borderDv}>
                  <IconButton>
                    <img alt="deleteIco" src={deleteIco} />
                  </IconButton>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </PersistentDrawerLeft>
  );
};

export default Businesses;
