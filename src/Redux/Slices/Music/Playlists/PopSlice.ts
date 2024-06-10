import { createSlice } from "@reduxjs/toolkit";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { IMusicPlayListDispatchAction } from "~/Types/Redux/Types";

const popPlaylist: IPlayListSummary[] = [];
export const popPlaylistsSlice = createSlice({
  name: "popPlaylists",
  initialState: {
    value: popPlaylist,
  },
  reducers: {
    addPopPlaylists: (state, action:IMusicPlayListDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addPopPlaylists } = popPlaylistsSlice.actions;
export default popPlaylistsSlice.reducer;