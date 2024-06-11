import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchSeason from "~/src/Hooks/TvShows/useFetchSeason";
import SeasonDetails from "./SeasonDetails/SeasonDetails";

const TvShowSeason = () => {
  const { number, showId, showName } = useLocalSearchParams();
  const { season, isLoading, error } = useFetchSeason(
    Number(showId),
    Number(number)
  );
  const { container, subContainer } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView contentContainerStyle={subContainer}>
        {isLoading && <ScreenSpinner />}
        {error && <HttpError />}
        {season && (
          <SeasonDetails
            season={season}
            showId={Number(showId)}
            showName={showName ? (Array.isArray(showName) ? "" : showName) : ""}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper(TvShowSeason);

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
