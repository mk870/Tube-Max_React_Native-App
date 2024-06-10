import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import axios from "axios";
import { addElectroPlaylists } from "~/Redux/Slices/Music/Playlists/ElectroSlice";
import { refetchSpotifyTokenAfterExpiration } from "./RefetchToken/RefetchToken";

const useFetchElectro = () => {
  const [error, setError] = useState(null);
  const electroPlaylists = useAppSelector(
    (state) => state.electroPlaylists.value
  );
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setError(null);
    if (electroPlaylists.length < 1) {
      setIsLoading(true);
      axios
        .get(
          `https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          if (data.data.playlists.items === undefined) {
            dispatch(addElectroPlaylists([]));
            setIsLoading(false);
          } else {
            dispatch(addElectroPlaylists(data.data.playlists.items));
            setIsLoading(false);
          }
        })
        .catch((e) => {
            console.log("error",e.message)
          if (e.message === "Request failed with status code 401") {
            refetchSpotifyTokenAfterExpiration(dispatch, setError);
          } else {
            setError(e.message);
            setIsLoading(false);
          }
        });
    } else setIsLoading(false);
  }, [dispatch, electroPlaylists, spotifyAccessToken]);
  return { electroPlaylists, error, isLoading };
};

export default useFetchElectro;
