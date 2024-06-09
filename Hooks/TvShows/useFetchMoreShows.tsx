import { useEffect, useState } from "react";
import axios from "axios";

import { useAppSelector } from "~/Redux/Hooks/Hooks";
import { tmdbKey } from "~/Utils/Constants";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";

const useFetchMoreShows = (type: "on_the_air" | "popular" | "top_rated") => {
  const showsOnAirPageOne = useAppSelector(
    (state) => state.showsPlayingNow.value
  );
  const popularShowsPageOne = useAppSelector(
    (state) => state.popularShows.value
  );
  const topRatedShowsPageOne = useAppSelector(
    (state) => state.topRatedShows.value
  );
  const getFirstPageShows = () => {
    if (type === "on_the_air") return showsOnAirPageOne;
    else if (type === "popular") return popularShowsPageOne;
    else return topRatedShowsPageOne;
  };
  const [data, setData] = useState<IShowSummary[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/tv/${type}?api_key=${tmdbKey}&page=2&language=en-US`;
  useEffect(() => {
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setData([...getFirstPageShows(), ...res.data.results]);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { data, error, isLoading };
};

export default useFetchMoreShows;
