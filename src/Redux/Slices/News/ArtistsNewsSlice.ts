import { createSlice } from "@reduxjs/toolkit";
import { INews } from "~/Types/Apis/News/News";
import { INewsDispatchAction } from "~/Types/Redux/Types";

const news: INews[] = [];
export const artistsNewsSlice = createSlice({
  name: "artistsNews",
  initialState: {
    value: news,
  },
  reducers: {
    addArtistsNews: (state, action: INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addArtistsNews } = artistsNewsSlice.actions;
export default artistsNewsSlice.reducer;
