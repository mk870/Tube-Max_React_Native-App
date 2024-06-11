import { useEffect, useState } from "react";
import axios from "axios";

import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { IContentType } from "~/src/Types/Shared/Types";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchTvShowSearch = (
  queryString: string | undefined,
  genres: string,
  contentType: IContentType
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IShowSummary[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey}&query=${queryString}&with_genres=${genres}&language=en-US`;
  useEffect(() => {
    setError(false);
    if (contentType === "tvshows" && queryString) {
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
      setData(null);
      setIsLoading(false)};
  }, [queryString, genres]);
  return { data, isLoading, error };
};

export default useFetchTvShowSearch;
