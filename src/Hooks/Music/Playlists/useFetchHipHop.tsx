import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "./RefetchToken/RefetchToken";
import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { addHipHopPlaylists } from "~/src/Redux/Slices/Music/Playlists/HipHopSlice";

const useFetchHipHop = () => {
  const [error, setError] = useState(null);
  const hipHopPlaylists = useAppSelector(
    (state) => state.hipHopPlaylists.value
  );
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null);
    if (hipHopPlaylists.length < 1) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addHipHopPlaylists([]));
            setIsLoading(false);
          } else {
            dispatch(addHipHopPlaylists(data.data.playlists.items));
            setIsLoading(false);
          }
        })
        .catch((e) => {
          console.log("error", e.message);
          if (e.message === "Request failed with status code 401") {
            refetchSpotifyTokenAfterExpiration(dispatch, setError);
          } else {
            setError(e.message);
            setIsLoading(false);
          }
        });
    } else setIsLoading(false);
  }, [dispatch, hipHopPlaylists, spotifyAccessToken]);
  return { hipHopPlaylists, error, isLoading };
};

export default useFetchHipHop;
