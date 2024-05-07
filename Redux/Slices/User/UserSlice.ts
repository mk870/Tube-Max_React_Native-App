import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../Types/Redux/Types";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const user: IUser = {
  emailAddress: "",
  firstName: "",
  userTheme: generateRandomColor(),
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: user,
  },
  reducers: {
    addFirstName: (state, action) => {
      state.value = {
        ...state.value,
        firstName: action.payload,
      };
    },
    addEmailAddress: (state, action) => {
      state.value = {
        ...state.value,
        emailAddress: action.payload,
      };
    },
  },
});
export const { addFirstName, addEmailAddress } = userSlice.actions;
export default userSlice.reducer;
