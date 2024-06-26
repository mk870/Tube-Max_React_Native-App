import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchRecommendations from "~/src/Hooks/Music/Track/useFetchRecommendations";
import useFetchTrack from "~/src/Hooks/Music/Track/useFetchTrack";
import useFetchTrackArtists from "~/src/Hooks/Music/Track/useFetchTrackArtists";
import TrackDetails from "./TrackDetails/TrackDetails";

const Track = () => {
  const { id } = useLocalSearchParams();
  const processedId = id ? (Array.isArray(id) ? "" : id) : "";
  const track = useFetchTrack(processedId);
  const trackRecommendations = useFetchRecommendations(processedId);
  const artistIds = () => {
    if (track.data && track.data.artists) {
      let artistList = track.data.artists;
      const idsList = [];
      for (let i = 0; i < artistList.length; i++) {
        if (i === artistList.length - 1) idsList.push(artistList[i].id);
        else idsList.push(`${artistList[i].id},`);
      }
      const ids = "".concat(...idsList);
      return ids;
    } else return null;
  };
  const artists = useFetchTrackArtists(artistIds());
  const isLoading = () => {
    if (artists.isLoading || track.isLoading || trackRecommendations.isLoading)
      return true;
    else return false;
  };
  const httpError = () => {
    if (artists.error || track.error || trackRecommendations.error) return true;
    else return false;
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading() && <ScreenSpinner />}
      {httpError() && <HttpError />}
      {artists.data && trackRecommendations.data && track.data && (
        <TrackDetails
          artists={artists.data}
          recommendations={trackRecommendations.data}
          track={track.data}
        />
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper(Track);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
