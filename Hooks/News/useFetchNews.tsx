import axios from "axios";
import { useEffect, useState } from "react";

import { useAppDispatch } from "~/Redux/Hooks/Hooks";
import { addActorsNews } from "~/Redux/Slices/News/ActorsNewsSlice";
import { addAlbumsNews } from "~/Redux/Slices/News/AlbumsNewsSlice";
import { addArtistsNews } from "~/Redux/Slices/News/ArtistsNewsSlice";
import { addEntertainmentNews } from "~/Redux/Slices/News/EntertainmentSlice";
import { addMoviesNews } from "~/Redux/Slices/News/MoviesNiewsSlice";
import { addSongsNews } from "~/Redux/Slices/News/SongsNewsSlice";
import { addTvShowsNews } from "~/Redux/Slices/News/TvShowsNewsSlice";
import { INews } from "~/Types/Apis/News/News";
import { INewsCategory, IStringOrNull } from "~/Types/Shared/Types";

const useFetchNews = (newsCategory: INewsCategory) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const dispatchNews = (data: INews[]) => {
    if (newsCategory === "hollywood actors") {
      dispatch(addActorsNews(data));
    } else if (newsCategory === "albums") {
      dispatch(addAlbumsNews(data));
    } else if (newsCategory === "movies") {
      dispatch(addMoviesNews(data));
    } else if (newsCategory === "tv shows") {
      dispatch(addTvShowsNews(data));
    } else if (newsCategory === "songs") {
      dispatch(addSongsNews(data));
    } else if (newsCategory === "entertainment") {
      dispatch(addEntertainmentNews(data));
    } else {
      dispatch(addArtistsNews(data));
    }
  };
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    axios
      .get(`https://tube-max.onrender.com/news/${newsCategory}`)
      .then((data) => {
        dispatchNews(data.data.articles);
      })
      .catch((e) => {
        console.log("error", e);
        setError(e);
      })
      .finally(() => setIsLoading(false));
  }, [newsCategory]);
  return { error, isLoading };
};

export default useFetchNews;
