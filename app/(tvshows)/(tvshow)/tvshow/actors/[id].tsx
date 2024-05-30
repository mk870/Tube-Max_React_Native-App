import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import ActorDetails from "~/Components/ContentDetails/Shared/ActorDetails/ActorDetails";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import useFetchActor from "~/Hooks/Movies/useFetchActor";
import useFetchActorMovies from "~/Hooks/Movies/useFetchActorMovies";
import useFetchActorTvShows from "~/Hooks/Movies/useFetchActorTvShows";
import ScreenWrapper from "~/HOCs/ScreenWrapper";

const TvShowActor = () => {
  const { id } = useLocalSearchParams();
  const actorProfile = useFetchActor(Number(id));
  const actorMovies = useFetchActorMovies(Number(id));
  const actorTvShows = useFetchActorTvShows(Number(id));
  const isLoading = () => {
    if (
      actorMovies.isLoading ||
      actorProfile.isLoading ||
      actorTvShows.isLoading
    )
      return true;
    else return false;
  };
  const hasError = () => {
    if (actorMovies.error || actorProfile.error || actorTvShows.error)
      return true;
    else return false;
  };
  const hasData = () => {
    if (actorMovies.data && actorProfile.data && actorTvShows.data) return true;
    else return false;
  };
  return (
    <SafeAreaView style={styles.container}>
      {hasError() && <HttpError />}
      {isLoading() && <ScreenSpinner />}
      {hasData() && (
        <ActorDetails
          actor={actorProfile.data}
          movies={actorMovies.data ? actorMovies.data : []}
          shows={actorTvShows.data ? actorTvShows.data : []}
        />
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper(TvShowActor);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
