import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Slices/User/UserSlice'
import { musicGenresSlice } from './Slices/Genres/Music'
import { movieGenresSlice } from './Slices/Genres/Movies'
import { tvShowGenresSlice } from './Slices/Genres/TvShows'
import { moviesPlayingNowSlice } from './Slices/Movies/NowPlayingSlice'
import { popularMoviesSlice } from './Slices/Movies/PopularSlice'
import { topRatedMoviesSlice } from './Slices/Movies/TopRatedSlice'


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    musicGenres: musicGenresSlice.reducer,
    movieGenres: movieGenresSlice.reducer,
    tvShowGenres: tvShowGenresSlice.reducer,
    moviesPlayingNow: moviesPlayingNowSlice.reducer,
    popularMovies: popularMoviesSlice.reducer,
    topRatedMovies: topRatedMoviesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch