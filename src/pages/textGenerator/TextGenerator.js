import * as React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Simplebutton from "../../components/simpleButton/SimpleButton";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={false}>
      <div style={{ width: 1000 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            minWidth: "100%",
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon color="disabled" />
          </IconButton>
        </div>
        <main
          style={{
            margin: 20,
            display: "grid",
            gridTemplateColumns: "6fr 6fr",
          }}
        >
          <div style={{ borderRight: "1px solid #DDE1EB" }}>
            <Simplebutton  text="SALES TEXT" COLOR="#fff" BG="#1DAAFF" />
            <div
              style={{
                border: "1px solid #DDE1EB",
                boxSizing: "border-box",
                borderRadius: 6,
                marginTop: 30,
                marginRight: 10,
                padding: 5,
              }}
            >
              <h2
                style={{
                  color: "#A09DA1",
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Product Description
              </h2>
              <p
                style={{
                  border: "1px solid #DDE1EB",
                  boxSizing: "border-box",
                  borderRadius: 6,
                  padding: 5,
                  color: "#A09DA1",
                  fontSize: 12,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
            <div
              style={{
                border: "1px solid #DDE1EB",
                boxSizing: "border-box",
                borderRadius: 6,
                marginTop: 30,
                marginRight: 10,
                padding: 5,
              }}
            >
              <h2
                style={{
                  color: "#A09DA1",
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Target Audience
              </h2>
              <p
                style={{
                  border: "1px solid #DDE1EB",
                  boxSizing: "border-box",
                  borderRadius: 6,
                  padding: 5,
                  color: "#A09DA1",
                  fontSize: 12,
                }}
              >
                Example: Small businesses
              </p>
            </div>
            <div
              style={{
                border: "1px solid #DDE1EB",
                boxSizing: "border-box",
                borderRadius: 6,
                marginTop: 30,
                marginRight: 10,
                padding: 5,
              }}
            >
              <h2
                style={{
                  color: "#A09DA1",
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                Output Language
              </h2>
              <select
                name="lang"
                style={{
                  border: "1px solid #DDE1EB",
                  boxSizing: "border-box",
                  borderRadius: 6,
                  width: "100%",
                  height: 40,
                  paddingLeft: 15,
                  color: "#A09DA1",
                }}
              >
                <option value="English">English</option>
                <option value="Russian">Russian</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: 10,
                marginTop: 50,
              }}
            >
              <Simplebutton
                text="GENERET"
                COLOR="#fff"
                BG="linear-gradient(92.21deg, #005792 6.65%, #04118A 106.65%)"
              />
            </div>
            <p
              style={{
                background: "#DDE1EB",
                borderRadius: 6,
                padding: 10,
                fontSize: 12,
                color: "#5E5E5E",
                margin: 10,
                textAlign: "center",
                marginTop: 50,
              }}
            >
              This is a beta-feature, if our A.I. is bringing nonsense answers,
              try to generate again and improve your product description if
              needed.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #DDE1EB",
              margin: "65px 10px 10px 10px",
              borderRadius: "6px",
              height: "88%",
            }}
          >
            <h3 style={{ color: "#005792", textAlign: "center" }}>
              Generated Texts
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 10px",
                height: "80%",
              }}
            >
              <p
                style={{ color: "#A09DA1", fontSize: 14, textAlign: "center" }}
              >
                You have not created a post yet. When you create your articles
                will be displayed in this area.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function TextGenerator() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        <ListItem
          button
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 18,
            color: "#C4C4CA",
          }}
        >
          <ListItemIcon>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7397 15.0993V5.90073C19.2529 5.77069 19.7225 5.50699 20.1007 5.13648C20.4788 4.76597 20.7521 4.30188 20.8926 3.79145C21.0331 3.28102 21.0358 2.74247 20.9005 2.23064C20.7652 1.7188 20.4968 1.25194 20.1224 0.877586C19.7481 0.503233 19.2812 0.234752 18.7694 0.0994713C18.2575 -0.0358092 17.719 -0.0330583 17.2086 0.107444C16.6981 0.247946 16.234 0.521183 15.8635 0.89934C15.493 1.2775 15.2293 1.74707 15.0993 2.26027H5.90073C5.77069 1.74707 5.50699 1.2775 5.13648 0.89934C4.76597 0.521183 4.30188 0.247946 3.79145 0.107444C3.28102 -0.0330583 2.74247 -0.0358092 2.23064 0.0994713C1.7188 0.234752 1.25194 0.503233 0.877586 0.877586C0.503233 1.25194 0.234752 1.7188 0.0994713 2.23064C-0.0358092 2.74247 -0.0330583 3.28102 0.107444 3.79145C0.247946 4.30188 0.521183 4.76597 0.89934 5.13648C1.2775 5.50699 1.74707 5.77069 2.26027 5.90073V15.0993C1.74707 15.2293 1.2775 15.493 0.89934 15.8635C0.521183 16.234 0.247946 16.6981 0.107444 17.2086C-0.0330583 17.719 -0.0358092 18.2575 0.0994713 18.7694C0.234752 19.2812 0.503233 19.7481 0.877586 20.1224C1.25194 20.4968 1.7188 20.7652 2.23064 20.9005C2.74247 21.0358 3.28102 21.0331 3.79145 20.8926C4.30188 20.7521 4.76597 20.4788 5.13648 20.1007C5.50699 19.7225 5.77069 19.2529 5.90073 18.7397H15.0993C15.2293 19.2529 15.493 19.7225 15.8635 20.1007C16.234 20.4788 16.6981 20.7521 17.2086 20.8926C17.719 21.0331 18.2575 21.0358 18.7694 20.9005C19.2812 20.7652 19.7481 20.4968 20.1224 20.1224C20.4968 19.7481 20.7652 19.2812 20.9005 18.7694C21.0358 18.2575 21.0331 17.719 20.8926 17.2086C20.7521 16.6981 20.4788 16.234 20.1007 15.8635C19.7225 15.493 19.2529 15.2293 18.7397 15.0993ZM17.9907 1.5112C18.287 1.5112 18.5766 1.59907 18.823 1.76368C19.0694 1.9283 19.2614 2.16228 19.3748 2.43602C19.4882 2.70977 19.5178 3.011 19.46 3.30161C19.4022 3.59222 19.2595 3.85916 19.05 4.06868C18.8405 4.27819 18.5735 4.42088 18.2829 4.47868C17.9923 4.53649 17.6911 4.50682 17.4174 4.39343C17.1436 4.28004 16.9096 4.08802 16.745 3.84165C16.5804 3.59529 16.4925 3.30564 16.4925 3.00933C16.4925 2.612 16.6504 2.23095 16.9313 1.94999C17.2123 1.66904 17.5933 1.5112 17.9907 1.5112ZM1.5112 3.00933C1.5112 2.71303 1.59907 2.42338 1.76368 2.17702C1.9283 1.93065 2.16228 1.73863 2.43602 1.62524C2.70977 1.51185 3.011 1.48218 3.30161 1.53999C3.59222 1.59779 3.85916 1.74048 4.06868 1.94999C4.27819 2.15951 4.42088 2.42645 4.47868 2.71706C4.53649 3.00767 4.50682 3.3089 4.39343 3.58265C4.28004 3.85639 4.08802 4.09037 3.84165 4.25499C3.59529 4.4196 3.30564 4.50747 3.00933 4.50747C2.612 4.50747 2.23095 4.34963 1.94999 4.06868C1.66904 3.78772 1.5112 3.40666 1.5112 3.00933ZM3.00933 19.4888C2.71303 19.4888 2.42338 19.4009 2.17702 19.2363C1.93065 19.0717 1.73863 18.8377 1.62524 18.564C1.51185 18.2902 1.48218 17.989 1.53999 17.6984C1.59779 17.4078 1.74048 17.1408 1.94999 16.9313C2.15951 16.7218 2.42645 16.5791 2.71706 16.5213C3.00767 16.4635 3.3089 16.4932 3.58265 16.6066C3.85639 16.72 4.09037 16.912 4.25499 17.1583C4.4196 17.4047 4.50747 17.6944 4.50747 17.9907C4.50747 18.388 4.34963 18.7691 4.06868 19.05C3.78772 19.331 3.40666 19.4888 3.00933 19.4888ZM15.0993 17.2416H5.90073C5.76623 16.7263 5.49684 16.2563 5.12029 15.8797C4.74375 15.5032 4.27365 15.2338 3.7584 15.0993V5.90073C4.27365 5.76623 4.74375 5.49684 5.12029 5.12029C5.49684 4.74375 5.76623 4.27365 5.90073 3.7584H15.0993C15.2338 4.27365 15.5032 4.74375 15.8797 5.12029C16.2563 5.49684 16.7263 5.76623 17.2416 5.90073V15.0993C16.7263 15.2338 16.2563 15.5032 15.8797 15.8797C15.5032 16.2563 15.2338 16.7263 15.0993 17.2416ZM17.9907 19.4888C17.6944 19.4888 17.4047 19.4009 17.1583 19.2363C16.912 19.0717 16.72 18.8377 16.6066 18.564C16.4932 18.2902 16.4635 17.989 16.5213 17.6984C16.5791 17.4078 16.7218 17.1408 16.9313 16.9313C17.1408 16.7218 17.4078 16.5791 17.6984 16.5213C17.989 16.4635 18.2902 16.4932 18.564 16.6066C18.8377 16.72 19.0717 16.912 19.2363 17.1583C19.4009 17.4047 19.4888 17.6944 19.4888 17.9907C19.4888 18.388 19.331 18.7691 19.05 19.05C18.7691 19.331 18.388 19.4888 17.9907 19.4888Z"
                fill="#C4C4CA"
              />
              <path
                d="M14.2455 6.75467H6.75488V8.2528H9.75115V14.9944H11.2493V8.2528H14.2455V6.75467Z"
                fill="#C4C4CA"
              />
            </svg>
          </ListItemIcon>
          <ListItemText primary={"Text Generator A.I."} />
        </ListItem>
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
