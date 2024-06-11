import { useEffect, useState } from "react";
import axios from "axios";

import { refetchSpotifyTokenAfterExpiration } from "./RefetchToken/RefetchToken";
import { useAppDispatch, useAppSelector } from "~/src/Redux/Hooks/Hooks";
import { IPlayList } from "~/src/Types/Apis/Music/PlayList";
import { IStringOrNull } from "~/src/Types/Shared/Types";

const useFetchPlaylist = (playlistId: string) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [data, setData] = useState<IPlayList|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setData(null);
    setError(null);
    axios
      .get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        },
      })
      .then((data) => {
        setData(data.data);
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
  }, [playlistId, spotifyAccessToken]);
  return { data, isLoading, error };
};

export default useFetchPlaylist;
