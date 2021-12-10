import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
  incomingdata: [
    { name: "amazon", type: "E-Commerce" },
    { name: "new star", type: "E-Commerce" },
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

export const businessesSlice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    businessesDetails: (state, action) => {
      state.videoId = action.payload;
    },
  },
});

export const { businessesDetails } = businessesSlice.actions;

export default businessesSlice.reducer;
