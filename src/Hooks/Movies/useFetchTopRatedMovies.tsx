import { useEffect, useState } from 'react'
import axios from 'axios';

import { useAppSelector, useAppDispatch } from '~/src/Redux/Hooks/Hooks';
import { addTopRatedMovies } from '~/src/Redux/Slices/Movies/TopRatedSlice';
import { tmdbKey } from '~/src/Utils/Constants';


const useFetchTopRatedMovies = () => {
    const topRated = useAppSelector((state) => state.topRatedMovies.value);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US`;
    useEffect(() => {
      if (topRated.length < 1) {
        setIsLoading(true);
        setError(false);
        axios
          .get(url)
          .then((res) => {
            dispatch(addTopRatedMovies(res.data.results));
          })
          .catch((e) => {
            console.log(e);
            setError(true);
          })
          .finally(() => setIsLoading(false));
      }
    }, []);
    return { data: topRated, isLoading, error };
}

export default useFetchTopRatedMovies