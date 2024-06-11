import { createSlice } from "@reduxjs/toolkit";

import { IMovieSummary } from "~/src/Types/Apis/Movies/SummaryMovieInfo";
import { IMovieSummaryDispatchAction } from "~/src/Types/Redux/Types";

const popularMoviesList: IMovieSummary[] = [];
export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    value: popularMoviesList,
  },
  reducers: {
    addPopularMovies: (state, action: IMovieSummaryDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addPopularMovies } = popularMoviesSlice.actions;
export default popularMoviesSlice.reducer;
