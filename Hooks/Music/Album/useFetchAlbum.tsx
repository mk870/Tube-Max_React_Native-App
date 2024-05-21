import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import { IStringOrNull } from "~/Types/Shared/Types";
import { refetchSpotifyTokenAfterExpiration } from "../Playlists/RefetchToken/RefetchToken";
import { IAlbum } from "~/Types/Apis/Music/Album/Album";

const useFetchAlbum = (albumId: string) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [data, setData] = useState<IAlbum | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const spotifyAccessToken = useAppSelector(
    (state) => state.spotifyAccessToken.value
  );
  useEffect(() => {
    setData(null);
    setError(null);
    axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, {
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
  }, [albumId, spotifyAccessToken]);
  return { data, isLoading, error };
};

export default useFetchAlbum;
