import { useEffect, useState } from "react";
import axios from "axios";
import { IMovieReview } from "~/Types/Apis/Movies/MovieReviews";
import { tmdbKey } from "~/Utils/Constants";

const useFetchActor = (actorId: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IMovieReview[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${tmdbKey}&language=en-US`;
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
  return { actorProfile: data, isLoading, error };
};

export default useFetchActor;
