import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import axios from "axios";
import { IStringOrNull } from "~/Types/Shared/Types";
import { refetchSpotifyTokenAfterExpiration } from "./RefetchToken/RefetchToken";
import { IPlayList } from "~/Types/Apis/Music/PlayList";

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
        console.log(data.data)
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
