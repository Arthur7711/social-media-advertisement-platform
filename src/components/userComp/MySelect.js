import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect({ title, options, BG, COLOR, WIDTH }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box style={{ borderRadius: 6 }} sx={{ minWidth: WIDTH ? WIDTH : 120 }}>
      <FormControl
        fullWidth
        style={{
          background: BG,
          color: COLOR ? COLOR : "#fff",
          borderRadius: 6,
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
        >
          {options && options.map((el) => <MenuItem value={el}>{el}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
