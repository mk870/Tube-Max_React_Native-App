import { useEffect, useState } from 'react'
import axios from 'axios';

import { useAppSelector, useAppDispatch } from '~/src/Redux/Hooks/Hooks';
import { addMoviesPlayingNow } from '~/src/Redux/Slices/Movies/NowPlayingSlice';
import { tmdbKey } from '~/src/Utils/Constants';

const useFetchMoviesPlayingNow = () => {
    const nowPlaying = useAppSelector((state) => state.moviesPlayingNow.value);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbKey}&language=en-US`;
    useEffect(() => {
      if (nowPlaying.length < 1) {
        setIsLoading(true);
        setError(false);
        axios
          .get(url)
          .then((res) => {
            dispatch(addMoviesPlayingNow(res.data.results));
          })
          .catch((e) => {
            console.log(e);
            setError(true);
          })
          .finally(() => setIsLoading(false));
      }
    }, []);
    return { data: nowPlaying, isLoading, error };
}

export default useFetchMoviesPlayingNow