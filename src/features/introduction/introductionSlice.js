import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
  videoId: 0,
};

// const getingVideoById = createAsyncThunk(
//   "video/getingVideoById",
//   async (userstate) => {
//     const response = await API.post("/auth", {
//       videoId: userstate?.videoId,
//     })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// );

export const introductionSlice = createSlice({
  name: "introduction",
  initialState,
  reducers: {
    videoId: (state, action) => {
      state.videoId = action.payload;
    },
  },
});

export const { videoId } = introductionSlice.actions;

export default introductionSlice.reducer;
