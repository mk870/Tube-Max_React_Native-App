import { createSlice } from "@reduxjs/toolkit";

import { ITopArtistDispatchAction } from "~/src/Types/Redux/Types";
import { IArtist } from "~/src/Types/Shared/Types";

const topArtists: IArtist[] = [];
export const topArtistsSlice = createSlice({
  name: "topArtists",
  initialState: {
    value: topArtists,
  },
  reducers: {
    addTopArtists: (state, action: ITopArtistDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addTopArtists } = topArtistsSlice.actions;
export default topArtistsSlice.reducer;
