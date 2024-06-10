import { addSpotifyAccessToken } from "~/Redux/Slices/Music/Token/SpotifyAccessTokenSlice";
import { client_id, client_secret } from "~/Utils/Constants";

export const refetchSpotifyTokenAfterExpiration = (
  dispatch: any,
  setError: any
) => {
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
      setError(e.message);
    });
};
