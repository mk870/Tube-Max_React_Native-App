import { createSlice } from "@reduxjs/toolkit";
import { IGenreList } from "~/src/Types/Redux/Types";

const movieGenres: IGenreList = [
  { id: "28", name: "Action", selected: false },
  { id: "12", name: "Adventure", selected: false },
  { id: "16", name: "Animation", selected: false },
  { id: "35", name: "Comedy", selected: false },
  { id: "80", name: "Crime", selected: false },
  { id: "99", name: "Documentary", selected: false },
  { id: "18", name: "Drama", selected: false },
  { id: "10751", name: "Family", selected: false },
  { id: "14", name: "Fantasy", selected: false },
  { id: "36", name: "History", selected: false },
  { id: "27", name: "Horror", selected: false },
  { id: "9648", name: "Mystery", selected: false },
  { id: "10749", name: "Romance", selected: false },
  { id: "878", name: "Science Fiction", selected: false },
  { id: "10770", name: "TV Movie", selected: false },
  { id: "53", name: "Thriller", selected: false },
  { id: "10752", name: "War", selected: false },
  { id: "37", name: "Western", selected: false },
];
export const movieGenresSlice = createSlice({
  name: "movieGenres",
  initialState: {
    value: movieGenres,
  },
  reducers: {
    toggleMovieGenre: (state, action) => {
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
    clearMoviesGenres: (state) => {
      const newList = state.value.map((genre) => {
          return {
            ...genre,
            selected: false,
          };
      });
      state.value = newList;
    },
  },
});
export const { toggleMovieGenre,clearMoviesGenres } = movieGenresSlice.actions;
export default movieGenresSlice.reducer;
