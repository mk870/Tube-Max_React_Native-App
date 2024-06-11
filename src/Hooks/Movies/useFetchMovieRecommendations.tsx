import { useEffect, useState } from "react";
import axios from "axios";

import { IMovieRecommendations } from "~/src/Types/Apis/Movies/MovieRecommandations";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchMovieRecommendations = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<null | IMovieRecommendations[]>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { recommandetions: data, isLoading, error };
};

export default useFetchMovieRecommendations;
