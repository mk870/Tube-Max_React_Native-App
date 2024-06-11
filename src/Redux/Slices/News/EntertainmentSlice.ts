import { createSlice } from "@reduxjs/toolkit";

import { INews } from "~/src/Types/Apis/News/News";
import { INewsDispatchAction } from "~/src/Types/Redux/Types";

const news: INews[] = [];
export const entertainmentSlice = createSlice({
  name: "entertainmentNews",
  initialState: {
    value: news,
  },
  reducers: {
    addEntertainmentNews: (state, action: INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addEntertainmentNews } = entertainmentSlice.actions;
export default entertainmentSlice.reducer;
