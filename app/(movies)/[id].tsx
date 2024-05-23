import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchMovieById from "~/Hooks/Movies/useFetchMovieById";
import { Skeleton } from "moti/skeleton";
import MovieDetails from "~/Components/ContentDetails/Movie/MovieDetails";
import HttpError from "~/Components/HttpError/HttpError";

const Movie = () => {
  const { id } = useLocalSearchParams();
  const movie = useFetchMovieById(id ? +id : 0);
  const { container, subContainer } = styles;
  const hasError = () => {
    if (movie.error) return true;
    else return false;
  };
  return (
    <SafeAreaView style={container}>
      <ScrollView contentContainerStyle={subContainer}>
        {movie.isLoading && (
          <Skeleton width={"100%"} height={400} colorMode="dark" />
        )}
        {hasError() && <HttpError />}
        {movie.movie && <MovieDetails movie={movie.movie} />}
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
