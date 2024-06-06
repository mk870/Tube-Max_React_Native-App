import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchPlaylist from "~/Hooks/Music/Playlists/useFetchPlaylist";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import HttpError from "~/Components/HttpError/HttpError";
import PlaylistDetails from "~/Components/ContentDetails/Music/Playlist/PlaylistDetails";

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
