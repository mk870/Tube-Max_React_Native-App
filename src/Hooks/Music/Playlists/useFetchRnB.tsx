import axios from "axios";
import { useState, useEffect } from "react";

import { refetchSpotifyTokenAfterExpiration } from "./RefetchToken/RefetchToken";
import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { addRnBPlaylists } from "~/src/Redux/Slices/Music/Playlists/RNBSLice";

const useFetchRnB = () => {
  const [error, setError] = useState(null);
  const rnbPlaylists = useAppSelector((state) => state.rnbPlaylists.value);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null);
    if (rnbPlaylists.length < 1) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEZPnFQSFB1T/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addRnBPlaylists([]));
            setIsLoading(false);
          } else {
            dispatch(addRnBPlaylists(data.data.playlists.items));
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
  }, [dispatch, rnbPlaylists, spotifyAccessToken]);
  return { error, isLoading,data:rnbPlaylists };
};

export default useFetchRnB;
