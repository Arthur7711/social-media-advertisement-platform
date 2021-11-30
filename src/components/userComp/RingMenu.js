import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import coin from "../../images/coin.png";
import Simplebutton from "../simpleButton/SimpleButton";
import fb from "../../images/bfb.png";
import sh from "../../images/sh.png";
import linkedin from "../../images/in.png";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img alt="jingle" src={coin} />
        <p
          style={{
            color: "#1DAAFF",
            fontWeight: 500,
            fontSize: 16,
            marginLeft: 15,
          }}
        >
          Your Referral Link
        </p>
      </DialogTitle>
      <p style={{ textAlign: "center", color: "#575757" }}>
        Get $10 in credit for every person you refer to ADCLOUD!
      </p>
      <div>
        <input
          placeholder="https://app.adcloud.com/auth/register?refId=0121139292160106094833"
          type="text"
          style={{
            border: "1px solid #F4F4F4",
            boxSizing: "border-box",
            borderRadius: 6,
            width: 500,
            height: 45,
            margin: "20px 30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Simplebutton text="Copy Link" COLOR="#fff" BG="#1DAAFF" />
        <p style={{ color: "#A09DA1" }}>or</p>
        <main
          style={{
            border: "1px solid #F4F4F4",
            boxSizing: "border-box",
            borderRadius: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <img alt="share" src={sh} style={{ marginRight: 10 }} />
            <span style={{ color: "#A09DA1" }}>Share on</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <img alt="fb" src={fb} style={{ marginRight: 10 }} />
            <span style={{ color: "#1877F2" }}>Facebook</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <img alt="in" src={linkedin} style={{ marginRight: 10 }} />
            <span style={{ color: "#0A66C2" }}>Linkedin</span>
          </div>
        </main>
      </div>
      <p
        style={{
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          color: "#A09DA1",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [coins, setCoins] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <div
        onClick={handleClickOpen}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          cursor: "pointer",
        }}
      >
        <img alt="coin" src={coin} />
        <div style={{ marginLeft: "10px" }}>
          <p
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 16,
              color: "#1DAAFF",
              margin: 0,
            }}
          >
            {coins} coin
          </p>
          <a
            style={{
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: 12,
              color: "#1DAAFF",
              margin: 0,
            }}
          >
            invite others and earb!
          </a>
        </div>
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
