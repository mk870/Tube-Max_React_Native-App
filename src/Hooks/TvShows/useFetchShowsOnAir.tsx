import { useEffect, useState } from "react";
import { addShowsPlayingNow } from "~/Redux/Slices/TvShows/ShowsNowPlaying";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "~/Redux/Hooks/Hooks";
import { tmdbKey } from "~/Utils/Constants";

const useFetchShowsOnAir = () => {
  const showsOnAir = useAppSelector((state) => state.showsPlayingNow.value);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    if (showsOnAir.length < 1) {
      setIsLoading(true);
      setError(false);
      axios
        .get(url)
        .then((res) => {
          dispatch(addShowsPlayingNow(res.data.results));
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);
  return { data: showsOnAir, isLoading, error };
};

export default useFetchShowsOnAir;
