import { createSlice } from "@reduxjs/toolkit";

import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { IShowSummaryDispatchAction } from "~/src/Types/Redux/Types";

const popularShows: IShowSummary[] = [];
export const popularShowsSlice = createSlice({
  name: "popularShows",
  initialState: {
    value: popularShows,
  },
  reducers: {
    addpopularShows: (state, action: IShowSummaryDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addpopularShows } = popularShowsSlice.actions;
export default popularShowsSlice.reducer;