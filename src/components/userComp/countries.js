import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { API } from "../../API/API";

export default function CountrySelect({ onchange }) {
  const [countries, setCountries] = React.useState([]);
  const [text, setText] = React.useState("");
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    API.get(`/countries/${text}`).then((r) => {
      setCountries(r.data);
    });
  }, [text]);

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "40rem" }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => {
        setSelected(option.id);
        onchange(selected);
        return option.name;
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img loading="lazy" width="20" src={option.flag} alt="" />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          sx={{ border: "1px solid #99c8ff", borderRadius: "8px" }}
          onChange={(e) => setText(e.target.value)}
          {...params}
          label="Select your country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
