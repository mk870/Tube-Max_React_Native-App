import { createSlice } from "@reduxjs/toolkit";

import { IPlayListSummary } from "~/src/Types/Apis/Music/PlayListSummary";
import { IMusicPlayListDispatchAction } from "~/src/Types/Redux/Types";

const rnbPlaylist: IPlayListSummary[] = [];
export const rnbPlaylistsSlice = createSlice({
  name: "rnbPlaylists",
  initialState: {
    value: rnbPlaylist,
  },
  reducers: {
    addRnBPlaylists: (state, action: IMusicPlayListDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addRnBPlaylists } = rnbPlaylistsSlice.actions;
export default rnbPlaylistsSlice.reducer;
