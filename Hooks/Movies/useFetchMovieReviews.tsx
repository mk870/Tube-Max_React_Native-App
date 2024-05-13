import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { tmdbKey } from "~/Utils/Constants";
import { IMovieReview } from "~/Types/Apis/Movies/MovieReviews";

type Props = {};

const useFetchMovieReviews = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IMovieReview[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { reviews: data, isLoading, error };
};

export default useFetchMovieReviews;
