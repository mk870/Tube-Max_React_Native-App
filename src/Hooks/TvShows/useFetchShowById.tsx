import  { useEffect, useState } from 'react'
import axios from 'axios';

import { tmdbKey } from '~/Utils/Constants';
import { IShow } from '~/Types/Apis/TvShows/Show';


const useFetchShowById = (id:number) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IShow | null>(null);
    const [error, setError] = useState<boolean>(false);
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbKey}&language=en-US`;
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
    return { show:data, isLoading, error };
}

export default useFetchShowById