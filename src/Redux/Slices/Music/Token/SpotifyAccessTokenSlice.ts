import { createSlice } from "@reduxjs/toolkit";

const accessToken: string = "";
export const spotifyAccessTokenSlice = createSlice({
  name: "spotifyAccessToken",
  initialState: {
    value: accessToken,
  },
  reducers: {
    addSpotifyAccessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addSpotifyAccessToken } = spotifyAccessTokenSlice.actions;
export default spotifyAccessTokenSlice.reducer;
