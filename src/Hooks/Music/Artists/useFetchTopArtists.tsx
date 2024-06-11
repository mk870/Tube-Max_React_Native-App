import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "../Playlists/RefetchToken/RefetchToken";
import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { addTopArtists } from "~/src/Redux/Slices/Music/Artists/TopArtistsSlice";

const useFetchTopArtists = () => {
  const top25ArtistsIdsString =
    "1Xyo4u8uXC1ZmMpatF05PJ,3TVXtAsR1Inumwj472S9r4,06HL4z0CvFAxyc27GXpf02,5YGY8feqx7naU7z4HrwZM6,4q3ewBCX7sLwd24euuV69X,0EmeFodog0BfCgMzAIvKQp,5pKCCKE2ajJHZ9KAiaK11H,6eUKZXaKkcviH0Ku9w2n3V,0hCNtLu0JehylgoiP8L4Gh,3Nrfpe0tUJi4K4DXYWgMUX,4kYSro6naA4h99UJvo89HB,1McMsnEElThX1knmY4oliG,6vWDO969PvNqNYHIOW5v0m,6KImCVD70vtIoJWnq6nGn3,66CXWjxzNUsdJxJ2JdwvnR,7tYKF4w9nC0nq9CsPZTHyP,0C8ZW7ezQVs4URX5aX7Kqx,1uNFoZAHBGtllmzznpCI3s,6qqNVTkY8uBg9cP3Jd7DAH,6jJ0s89eD6GaHleKKya26X,6M2wZ9GZgrQXHCFfjv46we,4gzpq5DPGxSnKTe4SA8HAU,04gDigrS5kc9YWfZHwBETP,2wY79sveU1sp5g7SokKOiI,7CajNmpbOovFoOoasH2HaY";
  const [error, setError] = useState<string | null>(null);
  const topArtists = useAppSelector((state) => state.topArtists.value);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    if (topArtists.length < 1) {
      setIsLoading(true);
      axios
        .get(`https://api.spotify.com/v1/artists`, {
          params: { ids: top25ArtistsIdsString },
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          },
        })
        .then((data) => {
          dispatch(addTopArtists(data.data.artists));
        })
        .catch((e) => {
          console.log("error", e.message);
          if (e.message === "Request failed with status code 401") {
            refetchSpotifyTokenAfterExpiration(dispatch, setError);
          } else {
            setError(e.message);
            setIsLoading(false);
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [spotifyAccessToken]);
  return { error, isLoading, data: topArtists };
};

export default useFetchTopArtists;
