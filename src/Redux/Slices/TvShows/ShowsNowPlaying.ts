import { createSlice } from "@reduxjs/toolkit";

import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { IShowSummaryDispatchAction } from "~/src/Types/Redux/Types";

const showsPlayingNow: IShowSummary[] = [];
export const showsPlayingNowSlice = createSlice({
  name: "showsPlayingNow",
  initialState: {
    value: showsPlayingNow,
  },
  reducers: {
    addShowsPlayingNow: (state, action: IShowSummaryDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addShowsPlayingNow } = showsPlayingNowSlice.actions;
export default showsPlayingNowSlice.reducer;