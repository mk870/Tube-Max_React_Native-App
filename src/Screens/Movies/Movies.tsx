import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchMoviesPlayingNow from "~/src/Hooks/Movies/useFetchMoviesPlayingNow";
import useFetchPopularMovies from "~/src/Hooks/Movies/useFetchPopularMovies";
import useFetchTopRatedMovies from "~/src/Hooks/Movies/useFetchTopRatedMovies";
import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";

const Movies = () => {
  const moviesOnTheatres = useFetchMoviesPlayingNow();
  const popularMovies = useFetchPopularMovies();
  const topRatedMovies = useFetchTopRatedMovies();
  const { container } = styles;
  const moviesOnTheatresTitle = "Movies in Theaters";
  const popularMoviesTitle = "Popular Movies";
  const topRatedoviesTitle = "Top Rated Movies";
  const hasError = () => {
    if (moviesOnTheatres.error || popularMovies.error || topRatedMovies.error) {
      return true;
    } else return false;
  };
  const isLoading = () => {
    if (
      moviesOnTheatres.isLoading ||
      popularMovies.isLoading ||
      topRatedMovies.isLoading
    )
      return true;
    else return false;
  };
  const hasDataLoaded = () => {
    if (
      moviesOnTheatres.data.length > 0 &&
      popularMovies.data.length > 0 &&
      topRatedMovies.data.length > 0
    )
      return true;
    else return false;
  };
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={container}
      showsVerticalScrollIndicator={false}
    >
      {hasError() ? (
        <HttpError />
      ) : (
        <>
          {isLoading() && <ScreenSpinner />}
          {hasDataLoaded() && (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Swipeable
                type="movie"
                content={moviesOnTheatres.data}
                headerTitle={moviesOnTheatresTitle}
                seeAllRouteFunc={() => router.push("movies/inTheatres")}
              />
              <Swipeable
                type="movie"
                content={topRatedMovies.data}
                headerTitle={topRatedoviesTitle}
                seeAllRouteFunc={() => router.push("movies/topRated")}
              />
              <Swipeable
                type="movie"
                content={popularMovies.data}
                headerTitle={popularMoviesTitle}
                seeAllRouteFunc={() => router.push("movies/popular")}
              />
            </ScrollView>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(Movies);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
