import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "../Playlists/RefetchToken/RefetchToken";
import { useAppDispatch, useAppSelector } from "~/src/Redux/Hooks/Hooks";
import { IAlbumTracks } from "~/src/Types/Apis/Music/Album/AlbumTracks";
import { IStringOrNull } from "~/src/Types/Shared/Types";

const useFetchAlbumTracks = (
  albumId: string,
  albumTotalTrackNumber: number|null
) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [data, setData] = useState<IAlbumTracks | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setData(null);
    setError(null);
    if (albumTotalTrackNumber) {
      axios
        .get(
          `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=${albumTotalTrackNumber}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          setData(data.data);
          setIsLoading(false);
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
        });
    }
  }, [albumId, spotifyAccessToken,albumTotalTrackNumber]);
  return { data, isLoading, error };
};

export default useFetchAlbumTracks;
