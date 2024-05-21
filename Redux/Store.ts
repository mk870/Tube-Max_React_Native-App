import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './Slices/User/UserSlice'
import { musicGenresSlice } from './Slices/Genres/Music'
import { movieGenresSlice } from './Slices/Genres/Movies'
import { tvShowGenresSlice } from './Slices/Genres/TvShows'
import { moviesPlayingNowSlice } from './Slices/Movies/NowPlayingSlice'
import { popularMoviesSlice } from './Slices/Movies/PopularSlice'
import { topRatedMoviesSlice } from './Slices/Movies/TopRatedSlice'
import { popularShowsSlice } from './Slices/TvShows/PopularShows'
import { topRatedShowsSlice } from './Slices/TvShows/TopRatedShows'
import { showsPlayingNowSlice } from './Slices/TvShows/ShowsNowPlaying'
import { spotifyAccessTokenSlice } from './Slices/Music/Token/SpotifyAccessTokenSlice'
import { topArtistsSlice } from './Slices/Music/Artists/TopArtistsSlice'
import { popPlaylistsSlice } from './Slices/Music/Playlists/PopSlice'
import { electroPlaylistsSlice } from './Slices/Music/Playlists/ElectroSlice'
import { hipHopPlaylistsSlice } from './Slices/Music/Playlists/HipHopSlice'
import { rnbPlaylistsSlice } from './Slices/Music/Playlists/RNBSLice'
import { topListPlaylistsSlice } from './Slices/Music/Playlists/TopListSlice'


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    musicGenres: musicGenresSlice.reducer,
    movieGenres: movieGenresSlice.reducer,
    tvShowGenres: tvShowGenresSlice.reducer,
    moviesPlayingNow: moviesPlayingNowSlice.reducer,
    popularMovies: popularMoviesSlice.reducer,
    topRatedMovies: topRatedMoviesSlice.reducer,
    popularShows: popularShowsSlice.reducer,
    topRatedShows: topRatedShowsSlice.reducer,
    showsPlayingNow: showsPlayingNowSlice.reducer,
    spotifyAccessToken: spotifyAccessTokenSlice.reducer,
    topArtists: topArtistsSlice.reducer,
    popPlaylists: popPlaylistsSlice.reducer,
    hipHopPlaylists: hipHopPlaylistsSlice.reducer,
    electroPlaylists: electroPlaylistsSlice.reducer,
    rnbPlaylists: rnbPlaylistsSlice.reducer,
    topListPlaylists: topListPlaylistsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch