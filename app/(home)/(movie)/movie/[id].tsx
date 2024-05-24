import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchMovieById from "~/Hooks/Movies/useFetchMovieById";
import { Skeleton } from "moti/skeleton";
import MovieDetails from "~/Components/ContentDetails/Movie/MovieDetails";
import HttpError from "~/Components/HttpError/HttpError";
import useFetchMovieCast from "~/Hooks/Movies/useFetchMovieCast";
import useFetchMovieRecommendations from "~/Hooks/Movies/useFetchMovieRecommendations";
import useFetchMovieReviews from "~/Hooks/Movies/useFetchMovieReviews";

const Movie = () => {
  const { id } = useLocalSearchParams();
  const movie = useFetchMovieById(id ? +id : 0);
  const movieCast = useFetchMovieCast(id ? +id : 0);
  const movieRecomms = useFetchMovieRecommendations(id ? +id : 0);
  const movieReviews = useFetchMovieReviews(id ? +id : 0);
  const { container, subContainer } = styles;
  const hasError = () => {
    if (movie.error) return true;
    else return false;
  };
  const isLoading = () => {
    if (
      movie.isLoading ||
      movieCast.isLoading ||
      movieRecomms.isLoading ||
      movieReviews.isLoading
    )
      return true;
    else return false;
  };
  return (
    <SafeAreaView style={container}>
      <ScrollView contentContainerStyle={subContainer}>
        {isLoading() && (
          <Skeleton width={"100%"} height={400} colorMode="dark" />
        )}
        {hasError() && <HttpError />}
        {movie.movie &&
          movieCast.cast &&
          movieRecomms.recommandetions &&
          movieReviews.reviews && (
            <MovieDetails
              movie={movie.movie}
              cast={movieCast.cast}
              recommandations={movieRecomms.recommandetions}
              reviews={movieReviews.reviews}
            />
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper(Movie);

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
});
