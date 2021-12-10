import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
  incomingdata: [
    {
      id: 1,
      name: "Ongoing Conversions Promotion http://www.empirefurniture.co.nz/",
      budget: "NZ$20.00 Daily",
      result: "-",
      impressions: "-",
      clicks: "-",
      CPC: "-",
      spend: "-",
    },
    {
      id: 2,
      name: "Ongoing Conversions Promotion http://www.empirefurniture.co.nz/",
      budget: "NZ$20.00 Daily",
      result: "-",
      impressions: "-",
      clicks: "-",
      CPC: "-",
      spend: "-",
    },
    {
      id: 3,
      name: "Ongoing Conversions Promotion http://www.empirefurniture.co.nz/",
      budget: "NZ$20.00 Daily",
      result: "-",
      impressions: "-",
      clicks: "-",
      CPC: "-",
      spend: "-",
    },
    {
      id: 4,
      name: "Ongoing Conversions Promotion http://www.empirefurniture.co.nz/",
      budget: "NZ$20.00 Daily",
      result: "-",
      impressions: "-",
      clicks: "-",
      CPC: "-",
      spend: "-",
    },
    {
      id: 5,
      name: "Ongoing Conversions Promotion http://www.empirefurniture.co.nz/",
      budget: "NZ$20.00 Daily",
      result: "-",
      impressions: "-",
      clicks: "-",
      CPC: "-",
      spend: "-",
    },
  ],
};

// const getingVideoById = createAsyncThunk(
//   "busimesses",
//   async (userstate) => {
//     const response = await API.post("/auth", {
//       businessesDetails: userstate?.videoId,
//     })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// );

export const tableSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    tableDetails: (state, action) => {
      state.videoId = action.payload;
    },
  },
});

export const { tableDetails } = tableSlice.actions;

export default tableSlice.reducer;
