import { useEffect, useState } from "react";
import axios from "axios";

import { IMovieCast } from "~/src/Types/Apis/Movies/MovieCast";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchMovieCast = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<null | IMovieCast>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { cast: data, isLoading, error };
};

export default useFetchMovieCast;
