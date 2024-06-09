import { useEffect, useState } from "react";
import axios from "axios";

import { useAppSelector } from "~/Redux/Hooks/Hooks";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { tmdbKey } from "~/Utils/Constants";

const useFetchMoreMovies = (type: "now_playing" | "top_rated" | "popular") => {
  const moviesOnTheatresPageOne = useAppSelector(
    (state) => state.moviesPlayingNow.value
  );
  const popularMoviesPageOne = useAppSelector(
    (state) => state.popularMovies.value
  );
  const topRatedMoviesPageOne = useAppSelector(
    (state) => state.topRatedMovies.value
  );
  const getFirstPageMovies = () => {
    if (type === "now_playing") return moviesOnTheatresPageOne;
    else if (type === "popular") return popularMoviesPageOne;
    else return topRatedMoviesPageOne;
  };
  const [data, setData] = useState<IMovieSummary[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${tmdbKey}&page=2&language=en-US`;
  useEffect(() => {
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setData([...getFirstPageMovies(),...res.data.results]);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { data, error, isLoading };
};

export default useFetchMoreMovies;
