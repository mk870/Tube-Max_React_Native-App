import { useEffect, useState } from 'react'
import axios from 'axios';

import { IMovieSummary } from '~/src/Types/Apis/Movies/SummaryMovieInfo';
import { tmdbKey } from '~/src/Utils/Constants';


const useFetchActorMovies = (actorId:number) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<IMovieSummary[] | null>(null);
    const [error, setError] = useState<boolean>(false);
    const url = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${tmdbKey}&language=en-US`;
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
}

export default useFetchActorMovies