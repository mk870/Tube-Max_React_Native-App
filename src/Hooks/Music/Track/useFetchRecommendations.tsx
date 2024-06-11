import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "../Playlists/RefetchToken/RefetchToken";
import { useAppDispatch, useAppSelector } from "~/src/Redux/Hooks/Hooks";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { IStringOrNull } from "~/src/Types/Shared/Types";

const useFetchRecommendations = (trackId: string) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [data, setData] = useState<ITrack[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setData(null);
    setError(null);
    axios
      .get(
        `https://api.spotify.com/v1/recommendations?seed_tracks=${trackId}&limit=80`,
        {
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          },
        }
      )
      .then((data) => {
        setData(data.data.tracks);
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
  }, [trackId, spotifyAccessToken]);
  return { data, isLoading, error };
};

export default useFetchRecommendations;
