import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchPlaylist from "~/src/Hooks/Music/Playlists/useFetchPlaylist";
import PlaylistDetails from "./PlaylistDetails/PlaylistDetails";

const Playlist = () => {
  const { id } = useLocalSearchParams();
  const processedId = id ? (Array.isArray(id) ? "" : id) : "";
  const { data, isLoading, error } = useFetchPlaylist(processedId);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <PlaylistDetails playlist={data} />}
    </SafeAreaView>
  );
};

export default ScreenWrapper(Playlist);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});