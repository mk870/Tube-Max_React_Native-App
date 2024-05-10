import { createSlice } from "@reduxjs/toolkit";
import { IMusicGenreList } from "~/Types/Redux/Types";

const musicGenres: IMusicGenreList = [
  { id: "toplists", name: "Toplist", selected: false },
  { id: "0JQ5DAqbMKFNQ0fGp4byGU", name: "Afro", selected: false },
  { id: "0JQ5DAqbMKFEC4WFtoNRpw", name: "Pop", selected: false },
  { id: "0JQ5DAqbMKFHOzuVTgTizF", name: "Electro", selected: false },
  { id: "0JQ5DAqbMKFF9bY76LXmfI", name: "Frequency", selected: false },
  { id: "0JQ5DAqbMKFQ00XGBls6ym", name: "Hiphop", selected: false },
  { id: "0JQ5DAqbMKFFzDl7qN9Apr", name: "Chill", selected: false },
  { id: "0JQ5DAqbMKFEZPnFQSFB1T", name: "RnB", selected: false },
  { id: "0JQ5DAqbMKFDXXwE9BDJAr", name: "Rock", selected: false },
  { id: "0JQ5DAqbMKFFtlLYUHv8bT", name: "Alternative", selected: false },
  { id: "0JQ5DAqbMKFxXaXKP7zcDp", name: "Latin", selected: false },
  { id: "0JQ5DAqbMKFCuoRTxhYWow", name: "Sleep", selected: false },
  { id: "0JQ5DAqbMKFzHmL4tf05da", name: "Mood", selected: false },
  { id: "0JQ5DAqbMKFCWjUTdzaG0e", name: "Indie", selected: false },
  { id: "0JQ5DAqbMKFIpEuaCnimBj", name: "Soul", selected: false },
  { id: "0JQ5DAqbMKFAXlCG6QvYQ4", name: "Workout", selected: false },
  { id: "0JQ5DAqbMKFCfObibaOZbv", name: "Gaming", selected: false },
  { id: "0JQ5DAqbMKFx0uLQR2okcc", name: "Home", selected: false },
];
export const musicGenresSlice = createSlice({
  name: "musicGenres",
  initialState: {
    value: musicGenres,
  },
  reducers: {
    toggleMusicGenres: (state, action) => {
      const newList = [...state.value];
      newList.forEach((genre) => {
        if (genre.id === action.payload) {
          genre.selected = !genre.selected;
        } else {
          genre.selected = false;
        }
      });
      state.value = newList;
    },
  },
});
export const { toggleMusicGenres } = musicGenresSlice.actions;
export default musicGenresSlice.reducer;
