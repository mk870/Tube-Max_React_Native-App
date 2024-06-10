import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchEpisode from "~/src/Hooks/TvShows/useFetchEpisode";
import EpisodeDetails from "./EpisodeDetails/EpisodeDetails";

const TvShowEpisode = () => {
  const { number, showId, seasonNumber, showName } = useLocalSearchParams();
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
        {episode && (
          <EpisodeDetails
            episode={episode}
            showName={showName ? (Array.isArray(showName) ? "" : showName) : ""}
          />
        )}
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
