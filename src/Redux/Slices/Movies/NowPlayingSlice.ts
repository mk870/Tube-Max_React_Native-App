import { createSlice } from "@reduxjs/toolkit";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IMovieSummaryDispatchAction } from "~/Types/Redux/Types";

const moviesPlayingNow: IMovieSummary[] = [];
export const moviesPlayingNowSlice = createSlice({
  name: "moviesPlayingNow",
  initialState: {
    value: moviesPlayingNow,
  },
  reducers: {
    addMoviesPlayingNow: (state, action: IMovieSummaryDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addMoviesPlayingNow } = moviesPlayingNowSlice.actions;
export default moviesPlayingNowSlice.reducer;
