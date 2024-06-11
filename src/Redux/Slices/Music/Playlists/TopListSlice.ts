import { createSlice } from "@reduxjs/toolkit";

import { IPlayListSummary } from "~/src/Types/Apis/Music/PlayListSummary";
import { IMusicPlayListDispatchAction } from "~/src/Types/Redux/Types";

const topListPlaylist: IPlayListSummary[] = [];
export const topListPlaylistsSlice = createSlice({
  name: "topListPlaylists",
  initialState: {
    value: topListPlaylist,
  },
  reducers: {
    addTopListPlaylists: (state, action: IMusicPlayListDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addTopListPlaylists } = topListPlaylistsSlice.actions;
export default topListPlaylistsSlice.reducer;
