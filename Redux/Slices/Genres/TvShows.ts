import { createSlice } from "@reduxjs/toolkit";
import { IGenreList } from "~/Types/Redux/Types";

const tvShowGenres: IGenreList = [
  { id: "10759", name: "Action & Adventure", selected: false },
  { id: "16", name: "Animation", selected: false },
  { id: "35", name: "Comedy", selected: false },
  { id: "80", name: "Crime", selected: false },
  { id: "99", name: "Documentary", selected: false },
  { id: "18", name: "Drama", selected: false },
  { id: "10751", name: "Family", selected: false },
  { id: "10762", name: "Kids", selected: false },
  { id: "9648", name: "Mystery", selected: false },
  { id: "10763", name: "News", selected: false },
  { id: "10764", name: "Reality", selected: false },
  { id: "10765", name: "Sci-Fi & Fantasy", selected: false },
  { id: "10766", name: "Soap", selected: false },
  { id: "10767", name: "Talk", selected: false },
  { id: "10768", name: "War & Politics", selected: false },
  { id: "37", name: "Western", selected: false },
];
export const tvShowGenresSlice = createSlice({
  name: "tvShowGenres",
  initialState: {
    value: tvShowGenres,
  },
  reducers: {
    toggleTvShowGenre: (state, action) => {
      const newList = state.value.map((genre) => {
        if (genre.id === action.payload) {
          return {
            ...genre,
            selected: !genre.selected,
          };
        } else {
          return genre;
        }
      });
      state.value = newList;
    },
  },
});
export const { toggleTvShowGenre } = tvShowGenresSlice.actions;
export default tvShowGenresSlice.reducer;
