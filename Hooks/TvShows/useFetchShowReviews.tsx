import { useEffect, useState } from "react";
import axios from "axios";
import { tmdbKey } from "~/Utils/Constants";
import { IShowReview } from "~/Types/Apis/TvShows/ShowReviews";

const useFetchShowReviews = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IShowReview[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${tmdbKey}&language=en-US`;
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

export default useFetchShowReviews;
