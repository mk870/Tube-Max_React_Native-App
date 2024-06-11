import { useEffect, useState } from "react";
import axios from "axios";

import { IMovieSummary } from "~/src/Types/Apis/Movies/SummaryMovieInfo";
import { IContentType } from "~/src/Types/Shared/Types";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchMovieSearch = (
  queryString: string|undefined,
  genres: string,
  contentType: IContentType
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IMovieSummary[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${queryString}&with_genres=${genres}&language=en-US`;
  useEffect(() => {
    setError(false);
    if (contentType === "movies" && queryString) {
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
    } else {
      setData(null)
      setIsLoading(false);
    }
  }, [queryString, genres]);
  return { data, isLoading, error };
};

export default useFetchMovieSearch;
