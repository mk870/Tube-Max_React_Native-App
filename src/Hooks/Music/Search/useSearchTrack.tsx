import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "../Playlists/RefetchToken/RefetchToken";
import { useAppDispatch, useAppSelector } from "~/src/Redux/Hooks/Hooks";
import { IMusicSearchType } from "~/src/Screens/Search/Results/types";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { IContentType, IStringOrNull } from "~/src/Types/Shared/Types";

const useSearchTrack = (
  queryString: string | undefined,
  contentType: IContentType,
  musicSearchType: IMusicSearchType
) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [data, setData] = useState<ITrack[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    if (queryString && contentType === "music" && musicSearchType === "track") {
      setData(null);
      setError(null);
      axios
        .get(
          `https://api.spotify.com/v1/search?q=${queryString}&type=track&limit=50`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            },
          }
        )
        .then((data) => {
          setData(data.data.tracks.items);
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
    } else {
      setData(null);
      setError(null);
      setIsLoading(false);
    }
  }, [queryString, musicSearchType, contentType, spotifyAccessToken]);
  return { data, isLoading, error };
};

export default useSearchTrack;
