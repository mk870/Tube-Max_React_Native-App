import { createSlice } from "@reduxjs/toolkit";

import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { IShowSummaryDispatchAction } from "~/src/Types/Redux/Types";

const topRatedShows: IShowSummary[] = [];
export const topRatedShowsSlice = createSlice({
  name: "topRatedShows",
  initialState: {
    value: topRatedShows,
  },
  reducers: {
    addtopRatedShows: (state, action: IShowSummaryDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addtopRatedShows } = topRatedShowsSlice.actions;
export default topRatedShowsSlice.reducer;