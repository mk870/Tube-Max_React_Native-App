import { createSlice } from "@reduxjs/toolkit";
import { IStringOrNull } from "~/src/Types/Shared/Types";

const accessToken: IStringOrNull = null;

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: {
    value: accessToken,
  },
  reducers: {
    updateAccessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
