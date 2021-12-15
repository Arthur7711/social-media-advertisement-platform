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
import { useSelector, useDispatch } from "react-redux";
import {
  userFirst,
  emailFirst,
  userSec,
  emailSec,
  confirmEmailSec,
  userImg,
} from "../../features/settings/generalSlice.js";
import {
  firstName,
  lastName,
  company,
  vat,
  cardCheck,
} from "../../features/settings/billingSlice";

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

  const [subAcc, setSubAcc] = React.useState([
    {
      name: "Cindy Zhu",
      email: "qhsz_nz@hotmail.com",
      business: "1 Businesses Assigned",
      downloader: false,
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generalSettings = useSelector((state) => state.general);
  const billingSettings = useSelector((state) => state.billing);
  const dispatch = useDispatch();

  let formData = new FormData();
  const checkData = () => console.log(JSON.stringify(generalSettings));
  const checkBillingData = () => console.log(JSON.stringify(billingSettings));

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
          <h3 style={{ color: "#475761" }}>GENERAL SETTINGS </h3>
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
            <p style={{ fontSize: 16, color: "#475761", textAlign: "center" }}>
              Change Personal Information
            </p>
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
              <label htmlFor="myFor">
                <img alt="download" src={down} />
                <input
                  onChange={(el) => {
                    formData.append("image", el);
                    console.log(formData.get("image"));
                    return dispatch(userImg(formData.get("image")));
                  }}
                  style={{ display: "none" }}
                  type="file"
                  id="myFor"
                />
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "100%" }}>
                <SimpleInput
                  onchange={(el) => dispatch(userFirst(el.target.value))}
                  data={generalSettings.userFirst}
                  plac="Charles Hu"
                  WIDTH="445px"
                />
                <SimpleInput
                  onchange={(el) => dispatch(emailFirst(el.target.value))}
                  data={generalSettings.emailFirst}
                  plac="kivi_nz@hotmail.com"
                  WIDTH="445px"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Simplebutton
                clickFN={() => checkData()}
                COLOR="#fff"
                BG="#1DAAFF"
                text="SAVE CHANGES"
              />
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
            <p style={{ fontSize: 16, color: "#475761", textAlign: "center" }}>
              Change Personal Information
            </p>
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
              <SimpleInput
                data={generalSettings.userSec}
                onchange={(el) => dispatch(userSec(el.target.value))}
                plac="Charles Hu"
                WIDTH="500px"
              />
              <div>
                <SimpleInput
                  data={generalSettings.emailSec}
                  onchange={(el) => dispatch(emailSec(el.target.value))}
                  plac="kivi_nz@hotmail.com"
                  WIDTH="240px"
                />
                <SimpleInput
                  data={generalSettings.confirmEmailSec}
                  onchange={(el) => dispatch(confirmEmailSec(el.target.value))}
                  plac="kivi_nz@hotmail.com"
                  WIDTH="240px"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Simplebutton
                clickFN={() => checkData()}
                COLOR="#fff"
                BG="#1DAAFF"
                text="SAVE CHANGES"
              />
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
            <p style={{ color: "#475761", fontSize: 16, marginLeft: "15px" }}>
              Billing Information
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>
                  First Name
                </p>
                <SimpleInput
                  onchange={(el) => dispatch(firstName(el.target.value))}
                  data={billingSettings.firstName}
                  COLOR="#6884A9"
                  WIDTH="250px"
                />
              </label>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>
                  Last Name
                </p>
                <SimpleInput
                  onchange={(el) => dispatch(lastName(el.target.value))}
                  data={billingSettings.lastName}
                  COLOR="#6884A9"
                  WIDTH="250px"
                />
              </label>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>Company</p>
                <SimpleInput
                  onchange={(el) => dispatch(company(el.target.value))}
                  data={billingSettings.company}
                  COLOR="#6884A9"
                  WIDTH="250px"
                />
              </label>
              <label>
                <p style={{ marginLeft: "15px", color: "#A09DA1" }}>Vat</p>
                <SimpleInput
                  onchange={(el) => dispatch(vat(el.target.value))}
                  data={billingSettings.vat}
                  COLOR="#6884A9"
                  WIDTH="250px"
                />
              </label>
            </div>
            <h3 style={{ color: "#475761", marginLeft: "15px" }}>
              Card Information
            </h3>
            <label>
              <p style={{ marginLeft: "15px", color: "#A09DA1" }}>Card Check</p>
              <SimpleInput
                onchange={(el) => dispatch(cardCheck(el.target.value))}
                data={billingSettings.cardCheck}
                COLOR="#6884A9"
                WIDTH="400px"
              />
            </label>
            <Simplebutton COLOR="#fff" BG="#42CC23" text="Change Card" />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Simplebutton
                clickFN={(el) => checkBillingData(el)}
                COLOR="#fff"
                BG="#1DAAFF"
                text="SAVE CHANGES"
              />
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
            <p
              style={{
                color: "#475761",
                fontSize: 16,
                marginLeft: "15px",
                fontWeight: "bold",
              }}
            >
              Upcoming Invoice
            </p>
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
              {upcomingData.map((el, i) => (
                <React.Fragment key={i}>
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
                </React.Fragment>
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
                downloader: true,
              },
            ]}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#475761" }}>SUB ACCOUNTS </h3>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              color: "#A09DA1",
              marginLeft: 20,
            }}
          >
            Invite new sub accounts and manage already existing ones.
          </p>
        </div>
        <div
          style={{
            border: "1px solid #DDE1EB",
            boxSizing: " border-box",
            borderRadius: 6,
          }}
        >
          <h2 style={{ color: "#475761", marginLeft: 15 }}>
            Invite a sub account
          </h2>
          <p style={{ color: "#1DAAFF", fontSize: 12, marginLeft: 15 }}>
            The sub account you are creating will get an email with login
            details.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <SimpleInput plac="Employee Full Name" WIDTH="400px" />
            <SimpleInput plac="Email address" WIDTH="400px" />
            <Simplebutton
              COLOR="#fff"
              BG="#1DAAFF"
              text="INVITE"
              WIDTH="400px"
            />
          </div>
          <hr style={{ color: "#DDE1EB" }} />
          <div>
            <h2 style={{ color: "#475761", marginLeft: 15 }}>
              Existing Sub Accounts
            </h2>
            <p style={{ color: "#A09DA1", fontSize: 12, marginLeft: 15 }}>
              Here you can see your sub accounts, edit business accesses and
              delete them when needed.
            </p>
          </div>
          <MyTable
            titles={["FULL NAME", "E-MAIL ADDRESS", "BUSINESS", "#"]}
            datas={subAcc}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#475761", fontWeight: 500 }}>
              Total Sub Accounts:
            </p>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#F4F4F4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#475761",
              }}
            >
              {subAcc.length}
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
