import { useEffect, useState } from "react";
import axios from "axios";

import { IMovieReview } from "~/src/Types/Apis/Movies/MovieReviews";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchMovieReviews = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IMovieReview[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${tmdbKey}&language=en-US`;
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
  return { reviews: data, isLoading, error };
};

export default useFetchMovieReviews;
