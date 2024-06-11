import { useEffect, useState } from "react";
import axios from "axios";

import { IMovie } from "~/src/Types/Apis/Movies/SingleMovie";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchMovieById = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IMovie | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
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
  }, [id]);
  return { movie:data, isLoading, error };
};

export default useFetchMovieById;
