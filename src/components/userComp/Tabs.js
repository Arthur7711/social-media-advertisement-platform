import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import down from "../../images/download.png";
import SimpleInput from "../simpleInput/SimpleInput";
import Simplebutton from "../simpleButton/SimpleButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyTable from "../myTable/MyTable";

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
  const [upcomingData, setUpcomingData] = React.useState([
    {
      title: "Ultimate Package",
      count: 1,
      price: 100,
    },
  ]);

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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h2>BILLING SETTINGS</h2>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              color: "#A09DA1",
              marginLeft: 20,
            }}
          >
            Manage your billing information and download your invoices.
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
              marginLeft: 20,
              height: 550,
            }}
          >
            <h3 style={{ color: "#475761", fontSize: 16, marginLeft: "15px" }}>
              Billing Information
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>
                  First Name
                </p>
                <SimpleInput COLOR="#6884A9" WIDTH="250px" />
              </label>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>
                  Last Name
                </p>
                <SimpleInput COLOR="#6884A9" WIDTH="250px" />
              </label>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>Company</p>
                <SimpleInput COLOR="#6884A9" WIDTH="250px" />
              </label>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>Vat</p>
                <SimpleInput COLOR="#6884A9" WIDTH="250px" />
              </label>
            </div>
            <h3 style={{ color: "#475761", marginLeft: "15px" }}>
              Card Information
            </h3>
            <label>
              <p style={{ marginLeft: "15px", color: "#A09DA1" }}>Card Check</p>
              <SimpleInput COLOR="#6884A9" WIDTH="400px" />
            </label>
            <Simplebutton COLOR="#fff" BG="#42CC23" text="Change Card" />
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
              height: 550,
            }}
          >
            <h3 style={{ color: "#475761", fontSize: 16, marginLeft: "15px" }}>
              Upcoming Invoice
            </h3>
            <p style={{ marginLeft: "15px", color: "#A09DA1" }}>
              This is a preview of the invoice that will be billed.
            </p>
            <div
              style={{
                border: "1px solid #F4F4F4",
                boxSizing: "border-box",
                borderRadius: 6,
                display: "grid",
                minWidth: "500px",
                gridTemplateColumns: "40% 20% 20% 20%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#A09DA1",
                  padding: 10,
                  fontSize: 12,
                }}
              >
                DESCRIPTION
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#A09DA1",
                  padding: 10,
                  fontSize: 12,
                }}
              >
                QTY
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#A09DA1",
                  padding: 10,
                  fontSize: 12,
                }}
              >
                UNIT PRICE
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#A09DA1",
                  padding: 10,
                  fontSize: 12,
                }}
              >
                AMOUNT
              </div>
              {upcomingData.map((el) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      color: "#005792",
                      padding: 10,
                      fontSize: 12,
                      border: "1px solid #F4F4F4",
                    }}
                  >
                    {el.title}
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
                    {el.count}
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
                    {`$${el.price}`}
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
                    {`$${el.price * el.count}`}
                  </div>
                </>
              ))}
            </div>
            <div
              style={{
                border: "1px solid #F4F4F4",
                boxSizing: "border-box",
                borderRadius: 6,
                display: "grid",
                gridTemplateColumns: "80% 20%",
                marginTop: 50,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#005792",
                  padding: 10,
                  fontSize: 12,
                  border: "1px solid #F4F4F4",
                }}
              >
                Sub Total
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
                {`$${upcomingData[0].count * upcomingData[0].price}`}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "#005792",
                  padding: 10,
                  fontSize: 12,
                  border: "1px solid #F4F4F4",
                }}
              >
                Total
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
                {`$${upcomingData[0].count * upcomingData[0].price}`}
              </div>
            </div>
            <Link style={{ fontSize: 12, color: "#A09DA1", marginTop: 20 }}>
              Cancel my membership & delete my data
            </Link>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #DDE1EB",
            boxSizing: "border-box",
            borderRadius: 6,
            marginTop: 50,
          }}
        >
          <h3 style={{ color: "#475761", marginLeft: 15 }}>Invoice List</h3>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              color: "#A09DA1",
              marginLeft: 20,
            }}
          >
            Last 5 invoices are listed below. It can be downloaded as a PDF. For
            older invoices, please use the navigation.
          </p>

          <MyTable
            titles={["DESCRIPTION", "TOTAL PRICE", "PAYMENT DATE", "AMOUNT"]}
            datas={[
              {
                invoice: "INVOICE #AYN202122-584",
                price: "$100",
                date: "Oct 19, 2021, 12:47:42 PM",
                downloader: "",
              },
            ]}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        SUB ACCOUNTS
      </TabPanel>
    </Box>
  );
}
