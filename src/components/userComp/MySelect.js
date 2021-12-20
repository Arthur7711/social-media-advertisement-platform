import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PropTypes } from "prop-types";

function MySelect({ title, options, BG, COLOR, WIDTH }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      style={{ borderRadius: 6, height: "40px" }}
      sx={{ width: WIDTH ? WIDTH : 120 }}
    >
      <FormControl
        fullWidth
        style={{
          background: BG,
          color: COLOR ? COLOR : "#fff",
          borderRadius: 6,
          height: "40px",
        }}
      >
        <InputLabel style={{ fontSize: "14px" }} id={title}>
          {title}
        </InputLabel>
        <Select
          labelId={title}
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{ height: "40px" }}
        >
          {options &&
            options.map((el, i) => (
              <MenuItem key={i} value={el}>
                {el}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

MySelect.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  BG: PropTypes.string,
  COLOR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  WIDTH: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default MySelect;
