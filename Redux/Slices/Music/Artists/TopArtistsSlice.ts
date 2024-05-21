import { createSlice } from "@reduxjs/toolkit";
import { ITopArtist } from "~/Types/Apis/Music/TopArtist";
import { ITopArtistDispatchAction } from "~/Types/Redux/Types";

const topArtists:ITopArtist[] = []
export const topArtistsSlice = createSlice({
  name: "topArtists",
  initialState: {
    value: topArtists,
  },
  reducers: {
    addTopArtists: (state, action:ITopArtistDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addTopArtists } = topArtistsSlice.actions;
export default topArtistsSlice.reducer;