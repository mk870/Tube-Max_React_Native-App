import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "../Playlists/RefetchToken/RefetchToken";
import { useAppDispatch, useAppSelector } from "~/src/Redux/Hooks/Hooks";
import { IStringOrNull, IArtist } from "~/src/Types/Shared/Types";

const useFetchAlbumArtists = (artistsIds: string | null) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [data, setData] = useState<IArtist[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setData(null);
    setError(null);
    if (artistsIds) {
      axios
        .get(`https://api.spotify.com/v1/artists?ids=${artistsIds}`, {
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          },
        })
        .then((data) => {
          setData(data.data.artists);
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
  }, [spotifyAccessToken, artistsIds]);
  return { data, isLoading, error };
};

export default useFetchAlbumArtists;
