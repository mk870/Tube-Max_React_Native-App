import  { useEffect, useState } from 'react'
import axios from 'axios';

import { IShowSummary } from '~/src/Types/Apis/TvShows/ShowSummary';
import { tmdbKey } from '~/src/Utils/Constants';

const useFetchActorTvShows = (actorId: number) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IShowSummary[] | null>(null);
    const [error, setError] = useState<boolean>(false);
    const url = `https://api.themoviedb.org/3/person/${actorId}/tv_credits?api_key=${tmdbKey}&language=en-US`;
    useEffect(() => {
      setIsLoading(true);
      setError(false);
      axios
        .get(url)
        .then((res) => {
          setData(res.data.cast);
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    }, []);
    return { data, isLoading, error };
  };

export default useFetchActorTvShows