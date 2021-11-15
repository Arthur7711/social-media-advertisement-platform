import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import down from "../../images/download.png";
import SimpleInput from "../simpleInput/SimpleInput";
import Simplebutton from "../simpleButton/SimpleButton";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="GENERAL" {...a11yProps(0)} />
          <Tab label="BILLING" {...a11yProps(1)} />
          <Tab label="SUB ACCOUNTS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h2>GENERAL SETTINGS </h2>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              color: "#A09DA1",
              marginLeft: 20,
            }}
          >
            Manage your login details and password.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #DDE1EB",
              boxSizing: "border-box",
              borderRadius: 6,
              padding: 20,
            }}
          >
            <h2 style={{ fontSize: 16, color: "#475761", textAlign: "center" }}>
              Change Personal Information
            </h2>
            <p
              style={{
                color: "#A09DA1",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              If you change email address, make sure to confirm the one after.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img alt="download" src={down} />
              <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
                <SimpleInput plac="Charles Hu" WIDTH="445px" />
                <SimpleInput plac="kivi_nz@hotmail.com" WIDTH="445px" />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Simplebutton COLOR="#fff" BG="#1DAAFF" text="SAVE CHANGES" />
            </div>
          </div>
          <div
            style={{
              border: "1px solid #DDE1EB",
              boxSizing: "border-box",
              borderRadius: 6,
              padding: 20,
              marginLeft: 20,
            }}
          >
            <h2 style={{ fontSize: 16, color: "#475761", textAlign: "center" }}>
              Change Personal Information
            </h2>
            <p
              style={{
                color: "#A09DA1",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              If you change email address, make sure to confirm the one after.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
              <SimpleInput plac="Charles Hu" WIDTH="500px" />
              <div>
                <SimpleInput plac="kivi_nz@hotmail.com" WIDTH="240px" />
                <SimpleInput plac="kivi_nz@hotmail.com" WIDTH="240px" />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Simplebutton COLOR="#fff" BG="#1DAAFF" text="SAVE CHANGES" />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        BILLING
      </TabPanel>
      <TabPanel value={value} index={2}>
        SUB ACCOUNTS
      </TabPanel>
    </Box>
  );
}
