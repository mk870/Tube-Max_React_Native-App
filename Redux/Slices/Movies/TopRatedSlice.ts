import { createSlice } from "@reduxjs/toolkit";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IMovieSummaryDispatchAction } from "~/Types/Redux/Types";

const topRatedMoviesList: IMovieSummary[] = [];
export const topRatedMoviesSlice = createSlice({
  name: "topRatedMovies",
  initialState: {
    value: topRatedMoviesList,
  },
  reducers: {
    addTopRatedMovies: (state, action: IMovieSummaryDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addTopRatedMovies } = topRatedMoviesSlice.actions;
export default topRatedMoviesSlice.reducer;
