import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import useFetchEpisode from "~/Hooks/TvShows/useFetchEpisode";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import EpisodeDetails from "~/Components/ContentDetails/TvShow/Episode/EpisodeDetails";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";

const TvShowEpisode = () => {
  const { number, showId, seasonNumber } = useLocalSearchParams();
  const { episode, error, isLoading } = useFetchEpisode(
    Number(showId),
    Number(seasonNumber),
    Number(number)
  );
  const { container, subContainer } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView contentContainerStyle={subContainer}>
        {isLoading && <ScreenSpinner />}
        {error && <HttpError />}
        {episode && <EpisodeDetails episode={episode} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper(TvShowEpisode);

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
