import { useEffect, useState } from 'react'
import axios from 'axios'
import { tmdbKey } from '~/Utils/Constants'
import { ISeason } from '~/Types/Apis/TvShows/Season'


const useFetchSeason = (id:number,seasonNumber:number) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<ISeason | null>(null);
    const [error, setError] = useState<boolean>(false);
    const url = `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${tmdbKey}&language=en-US`;
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
    return { season:data, isLoading, error };
}

export default useFetchSeason