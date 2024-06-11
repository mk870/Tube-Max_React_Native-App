import { createSlice } from "@reduxjs/toolkit";

import { INews } from "~/src/Types/Apis/News/News";
import { INewsDispatchAction } from "~/src/Types/Redux/Types";

const news: INews[] = [];
export const albumsNewsSlice = createSlice({
  name: "albumsNews",
  initialState: {
    value: news,
  },
  reducers: {
    addAlbumsNews: (state, action:INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addAlbumsNews } = albumsNewsSlice.actions;
export default albumsNewsSlice.reducer;