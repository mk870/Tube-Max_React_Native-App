import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchMoviesPlayingNow from "~/Hooks/Movies/useFetchMoviesPlayingNow";
import SwipeableSkeleton from "~/Components/SkeletonLoaders/Swipeable/SwipeableSkeleton";
import Swipeable from "~/Components/Swipeable/Swipeable";
import useFetchPopularMovies from "~/Hooks/Movies/useFetchPopularMovies";
import useFetchTopRatedMovies from "~/Hooks/Movies/useFetchTopRatedMovies";
import HttpError from "~/Components/HttpError/HttpError";

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
  return (
    <ScrollView style={container} >
      {hasError() ? (
        <HttpError/>
      ) : (
        <>
          {moviesOnTheatres.isLoading && (
            <SwipeableSkeleton headerTitle={moviesOnTheatresTitle} />
          )}
          {moviesOnTheatres.data.length > 0 && (
            <Swipeable
              type="movie"
              content={moviesOnTheatres.data}
              headerTitle={moviesOnTheatresTitle}
            />
          )}
          {topRatedMovies.isLoading && (
            <SwipeableSkeleton headerTitle={topRatedoviesTitle} />
          )}
          {topRatedMovies.data.length > 0 && (
            <Swipeable
              type="movie"
              content={topRatedMovies.data}
              headerTitle={topRatedoviesTitle}
            />
          )}
          {popularMovies.isLoading && (
            <SwipeableSkeleton headerTitle={popularMoviesTitle} />
          )}
          {popularMovies.data.length > 0 && (
            <Swipeable
              type="movie"
              content={popularMovies.data}
              headerTitle={popularMoviesTitle}
            />
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
    paddingBottom: 10,
  },
});
