import { createSlice } from "@reduxjs/toolkit";

import { INews } from "~/src/Types/Apis/News/News";
import { INewsDispatchAction } from "~/src/Types/Redux/Types";

const news: INews[] = [];
export const tvShowsNewsSlice = createSlice({
  name: "tvShowsNews",
  initialState: {
    value: news,
  },
  reducers: {
    addTvShowsNews: (state, action:INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addTvShowsNews } = tvShowsNewsSlice.actions;
export default tvShowsNewsSlice.reducer;