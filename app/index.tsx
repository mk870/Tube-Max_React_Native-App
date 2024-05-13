import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../HOCs/ScreenWrapper";
import { screenStyles } from "../GlobalStyles/ScreenStyles";
import { StatusBar } from "expo-status-bar";
import useFetchPopularMovies from "~/Hooks/Movies/useFetchPopularMovies";
import useFetchTopRatedMovies from "~/Hooks/Movies/useFetchTopRatedMovies";
import useFetchMoviesPlayingNow from "~/Hooks/Movies/useFetchMoviesPlayingNow";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";

const Home = () => {
 const popularMovies = useFetchPopularMovies();
  const topRated = useFetchTopRatedMovies();
  const nowPlaying = useFetchMoviesPlayingNow();
  const isLoading = () => {
    if (popularMovies.isLoading || topRated.isLoading || nowPlaying.isLoading) {
      return true;
    } else return false;
  };
  return (
    <ScrollView style={[screenStyles.container]}>
      <StatusBar style="auto" />
      {isLoading() && <ScreenSpinner />}
      {topRated.data && popularMovies.data && nowPlaying.data && (
        <Text style={{ color: "white" }}>we are in bznss</Text>
      )}
      {isLoading() && <ScreenSpinner />}
    </ScrollView>
  );
};

export default ScreenWrapper(Home);

const styles = StyleSheet.create({});
