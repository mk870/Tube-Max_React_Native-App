import axios from "axios";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import { addActorsNews } from "~/Redux/Slices/News/ActorsNewsSlice";
import { addAlbumsNews } from "~/Redux/Slices/News/AlbumsNewsSlice";
import { addArtistsNews } from "~/Redux/Slices/News/ArtistsNewsSlice";
import { addEntertainmentNews } from "~/Redux/Slices/News/EntertainmentSlice";
import { addMoviesNews } from "~/Redux/Slices/News/MoviesNiewsSlice";
import { addSongsNews } from "~/Redux/Slices/News/SongsNewsSlice";
import { addTvShowsNews } from "~/Redux/Slices/News/TvShowsNewsSlice";
import { INews } from "~/Types/Apis/News/News";
import { INewsCategory, IStringOrNull } from "~/Types/Shared/Types";
import { backendUrl } from "~/Utils/Constants";
import { addNewsId } from "~/Utils/Funcs";

const useFetchNews = (newsCategory: INewsCategory) => {
  const [error, setError] = useState<IStringOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const actorNews = useAppSelector((state) => state.actorsNews.value);
  const songNews = useAppSelector((state) => state.songsNews.value);
  const artistsNews = useAppSelector((state) => state.artistsNews.value);
  const entertainmentNews = useAppSelector(
    (state) => state.entertainmentNews.value
  );
  const tvShowNews = useAppSelector((state) => state.tvShowsNews.value);
  const movieNews = useAppSelector((state) => state.moviesNews.value);
  const albumNews = useAppSelector((state) => state.albumsNews.value);
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
  const getData = () => {
    if (newsCategory === "hollywood actors") {
      return actorNews;
    } else if (newsCategory === "albums") {
      return albumNews;
    } else if (newsCategory === "movies") {
      return movieNews;
    } else if (newsCategory === "tv shows") {
      return tvShowNews;
    } else if (newsCategory === "songs") {
      return songNews;
    } else if (newsCategory === "entertainment") {
      return entertainmentNews;
    } else {
      return artistsNews;
    }
  };
  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    axios
      .get(`${backendUrl}news/${newsCategory}`)
      .then((data) => {
        dispatchNews(addNewsId(data.data.articles));
      })
      .catch((e) => {
        console.log("error", e);
        setError(e);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    if (newsCategory === "hollywood actors" && actorNews.length < 1) {
      fetchData();
    } else if (newsCategory === "albums" && albumNews.length < 1) {
      fetchData();
    } else if (newsCategory === "movies" && movieNews.length < 1) {
      fetchData();
    } else if (newsCategory === "tv shows" && tvShowNews.length < 1) {
      fetchData();
    } else if (newsCategory === "songs" && songNews.length < 1) {
      fetchData();
    } else if (
      newsCategory === "entertainment" &&
      entertainmentNews.length < 1
    ) {
      fetchData();
    } else if (newsCategory === "musicians" && artistsNews.length < 1) {
      fetchData();
    } else setIsLoading(false);
  }, [newsCategory]);
  return { data: getData(), error, isLoading };
};

export default useFetchNews;
