import { useEffect, useState } from "react";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import { ITrack } from "~/Types/Apis/Music/Track/Track";
import { IArtist, IContentType, IStringOrNull } from "~/Types/Shared/Types";
import { refetchSpotifyTokenAfterExpiration } from "./Playlists/RefetchToken/RefetchToken";
import { IAlbumSummary } from "~/Types/Apis/Music/Album/AlbumSummary";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";

const useSearchSpotify = (
  type: string,
  queryString: string | undefined,
  contentType: IContentType
) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [tracks, setTracks] = useState<ITrack[] | null>(null);
  const [artists, setArtists] = useState<IArtist[] | null>(null);
  const [albums, setAlbums] = useState<IAlbumSummary[] | null>(null);
  const [playlists, setPlaylists] = useState<IPlayListSummary[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  const results = () => {
    if (type === "album") return albums;
    else if (type === "artist") return artists;
    else if (type === "track") return tracks;
    else return playlists;
  };
  useEffect(() => {
    setTracks(null);
    setAlbums(null);
    setArtists(null);
    setPlaylists(null);
    setError(null);
    if (contentType === "music" && queryString) {
      axios
        .get(
          `https://api.spotify.com/v1/search?q=${queryString}&type=${type}&limit=50`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          console.log(data.data.playlists.items);
          if (type === "album") setAlbums(data.data.albums.items);
          else if (type === "artist") setArtists(data.data.artists.items);
          else if (type === "track") setTracks(data.data.tracks.items);
          else setPlaylists(data.data.playlists.item);
        })
        .catch((e) => {
          console.log("error", e.message);
          if (e.message === "Request failed with status code 401") {
            refetchSpotifyTokenAfterExpiration(dispatch, setError);
          } else {
            setError(
              "something went wrong, please check your network connection"
            );
            setIsLoading(false);
          }
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
    } else setIsLoading(false);
  }, [queryString, type, spotifyAccessToken]);
  return { data: results(), isLoading, error };
};

export default useSearchSpotify;
