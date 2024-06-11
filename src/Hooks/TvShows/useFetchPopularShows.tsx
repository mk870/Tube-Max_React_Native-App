import { useEffect, useState } from "react";
import axios from "axios";

import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { addpopularShows } from "~/src/Redux/Slices/TvShows/PopularShows";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchPopularShows = () => {
  const popularShows = useAppSelector((state) => state.popularShows.value);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    if (popularShows.length < 1) {
      setIsLoading(true);
      setError(false);
      axios
        .get(url)
        .then((res) => {
          dispatch(addpopularShows(res.data.results));
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);
  return { data: popularShows, isLoading, error };
};

export default useFetchPopularShows;
