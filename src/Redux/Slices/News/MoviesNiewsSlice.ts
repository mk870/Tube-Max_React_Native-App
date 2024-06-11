import { createSlice } from "@reduxjs/toolkit";

import { INews } from "~/src/Types/Apis/News/News";
import { INewsDispatchAction } from "~/src/Types/Redux/Types";

const news: INews[] = [];
export const moviesNewsSlice = createSlice({
  name: "moviesNews",
  initialState: {
    value: news,
  },
  reducers: {
    addMoviesNews: (state, action:INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addMoviesNews } = moviesNewsSlice.actions;
export default moviesNewsSlice.reducer;