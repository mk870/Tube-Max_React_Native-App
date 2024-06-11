import { useEffect, useState } from 'react'
import axios from 'axios';

import { IShowRecommendation } from '~/src/Types/Apis/TvShows/ShowRecommendation';
import { tmdbKey } from '~/src/Utils/Constants';

const useFetchShowRecommendations = (id:number) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IShowRecommendation[]|null>(null);
    const [error, setError] = useState<boolean>(false);
    const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${tmdbKey}&language=en-US`;
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
    return { recommendations:data, isLoading, error };
}

export default useFetchShowRecommendations