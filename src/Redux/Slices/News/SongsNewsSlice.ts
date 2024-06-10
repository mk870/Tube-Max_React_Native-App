import { createSlice } from "@reduxjs/toolkit";
import { INews } from "~/Types/Apis/News/News";
import { INewsDispatchAction } from "~/Types/Redux/Types";

const news: INews[] = [];
export const songsNewsSlice = createSlice({
  name: "songsNews",
  initialState: {
    value: news,
  },
  reducers: {
    addSongsNews: (state, action: INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addSongsNews } = songsNewsSlice.actions;
export default songsNewsSlice.reducer;
