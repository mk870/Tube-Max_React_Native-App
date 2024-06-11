import { useEffect, useState } from "react";
import axios from "axios";

import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { addPopularMovies } from "~/src/Redux/Slices/Movies/PopularSlice";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchPopularMovies = () => {
  const popularMovies = useAppSelector((state) => state.popularMovies.value);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    if (popularMovies.length < 1) {
      setIsLoading(true);
      setError(false);
      axios
        .get(url)
        .then((res) => {
          dispatch(addPopularMovies(res.data.results));
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);
  return { data: popularMovies, isLoading, error };
};

export default useFetchPopularMovies;
