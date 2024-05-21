import { createSlice } from "@reduxjs/toolkit";
import { INews } from "~/Types/Apis/News/News";
import { INewsDispatchAction } from "~/Types/Redux/Types";

const news: INews[] = [];
export const actorsNewsSlice = createSlice({
  name: "actorsNews",
  initialState: {
    value: news,
  },
  reducers: {
    addActorsNews: (state, action: INewsDispatchAction) => {
      state.value = action.payload;
    },
  },
});
export const { addActorsNews } = actorsNewsSlice.actions;
export default actorsNewsSlice.reducer;
