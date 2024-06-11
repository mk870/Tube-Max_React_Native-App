import { useEffect, useState } from "react";
import axios from "axios";

import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { addtopRatedShows } from "~/src/Redux/Slices/TvShows/TopRatedShows";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchTopRatedShows = () => {
  const topRatedShows = useAppSelector((state) => state.topRatedShows.value);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    if (topRatedShows.length < 1) {
      setIsLoading(true);
      setError(false);
      axios
        .get(url)
        .then((res) => {
          dispatch(addtopRatedShows(res.data.results));
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);
  return { data: topRatedShows, isLoading, error };
};

export default useFetchTopRatedShows;
