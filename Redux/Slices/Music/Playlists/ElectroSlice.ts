import { createSlice } from "@reduxjs/toolkit";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { IMusicPlayListDispatchAction } from "~/Types/Redux/Types";

const electroPlaylist:IPlayListSummary[]=[]
export const electroPlaylistsSlice = createSlice({
  name: "electroPlaylists",
  initialState: {
    value: electroPlaylist,
  },
  reducers: {
    addElectroPlaylists: (state, action:IMusicPlayListDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addElectroPlaylists } = electroPlaylistsSlice.actions;
export default electroPlaylistsSlice.reducer;