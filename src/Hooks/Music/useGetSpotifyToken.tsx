import { useEffect, useState } from "react";
import { useAppDispatch } from "~/Redux/Hooks/Hooks";
import { addSpotifyAccessToken } from "~/Redux/Slices/Music/Token/SpotifyAccessTokenSlice";
import { client_id, client_secret } from "~/Utils/Constants";

const useGetSpotifyToken = () => {
  const [spotifyAccessTokenError, setSpotifyAccessTokenError] = useState(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(addSpotifyAccessToken(response.access_token));
      })
      .catch((e) => {
        setSpotifyAccessTokenError(e.message);
      });
  }, []);
  return { spotifyAccessTokenError };
};

export default useGetSpotifyToken;
