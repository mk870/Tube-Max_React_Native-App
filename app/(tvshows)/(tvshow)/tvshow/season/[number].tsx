import { ScrollView, StyleSheet} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenWrapper from "~/HOCs/ScreenWrapper";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import useFetchSeason from "~/Hooks/TvShows/useFetchSeason";
import SeasonDetails from "~/Components/ContentDetails/TvShow/Season/SeasonDetails";

const TvShowSeason = () => {
  const { number, showId } = useLocalSearchParams();
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
        {season && <SeasonDetails season={season} showId={Number(showId)} />}
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
