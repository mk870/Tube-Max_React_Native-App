import { createSlice } from "@reduxjs/toolkit";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { IMusicPlayListDispatchAction } from "~/Types/Redux/Types";

const hipHopPlaylist:IPlayListSummary[] = []
export const hipHopPlaylistsSlice = createSlice({
  name: "hipHopPlaylists",
  initialState: {
    value: hipHopPlaylist,
  },
  reducers: {
    addHipHopPlaylists: (state, action:IMusicPlayListDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addHipHopPlaylists } = hipHopPlaylistsSlice.actions;
export default hipHopPlaylistsSlice.reducer;