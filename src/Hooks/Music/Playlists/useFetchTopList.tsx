import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import axios from "axios";
import { addTopListPlaylists } from "~/Redux/Slices/Music/Playlists/TopListSlice";
import { refetchSpotifyTokenAfterExpiration } from "./RefetchToken/RefetchToken";

const useFetchTopList = () => {
  const [error, setError] = useState(null);
  const topListPlaylists = useAppSelector(
    (state) => state.topListPlaylists.value
  );
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null);
    if (topListPlaylists.length < 1) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/toplists/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addTopListPlaylists([]));
            setIsLoading(false);
          } else {
            dispatch(addTopListPlaylists(data.data.playlists.items));
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
  }, [dispatch, spotifyAccessToken, topListPlaylists]);
  return { error, isLoading,data:topListPlaylists };
};

export default useFetchTopList;
