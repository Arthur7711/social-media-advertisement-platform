import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import jingle from "../../images/jingle.png";

const emails = [
  "username@gmail.comadgcddgddcd fcdcdcchvh yhbhkb jhbhj bfv hbjh b jkhb kjhn",
  "user02@gmail.com",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      style={{ position: "absolute", top: 5, right: 5 }}
    >
      <DialogTitle
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img alt="jingle" src={jingle} />
        <p
          style={{
            color: "#04118A",
            fontWeight: 500,
            fontSize: 16,
            marginLeft: 15,
          }}
        >
          Notification
        </p>
      </DialogTitle>
      <p style={{ textAlign: "center", color: "#575757" }}>EARLIER</p>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
            style={{
              width: "400px",
              border: "1px solid #DDE1EB",
              boxSizing: "border-box",
              borderRadius: "6px",
              margin: 10,
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={{
                display: "flex",
                flexWrap: "wrap",
                color: " #1DAAFF",
              }}
              primary={email}
            />
          </ListItem>
        ))}
      </List>
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
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
          width: 42,
          height: 42,
          background: "#F4F4F4",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 15px",
          cursor: "pointer",
        }}
      >
        <img alt="jingle" src={jingle} />
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
