import { useEffect, useState } from "react";
import axios from "axios";
import { tmdbKey } from "~/Utils/Constants";
import { IEpisode } from "~/Types/Apis/TvShows/Episode";

const useFetchEpisode = (
  id: number,
  seasonNumber: number,
  episodeNumber: number
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IEpisode | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { episode: data, isLoading, error };
};

export default useFetchEpisode;
