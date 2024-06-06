import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchAlbum from "~/Hooks/Music/Album/useFetchAlbum";
import AlbumDetails from "~/Components/ContentDetails/Music/Album/AlbumDetails";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import { getArtistIds } from "~/Utils/Funcs";
import useFetchAlbumArtists from "~/Hooks/Music/Album/useFetchAlbumArtists";

const Album = () => {
  const { id } = useLocalSearchParams();
  const processedId = id ? (Array.isArray(id) ? "" : id) : "";
  const album = useFetchAlbum(processedId);
  const artistIds = () => {
    if (album.data && album.data.tracks.items)
      return getArtistIds(album.data.tracks.items);
    else return null;
  };
  const artists = useFetchAlbumArtists(artistIds());
  const isLoading = () => {
    if (album.isLoading || artists.isLoading) return true;
    else return false;
  };
  const httpError = () => {
    if (album.error || artists.error) return true;
    else return false;
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading() && <ScreenSpinner />}
      {httpError() && <HttpError />}
      {album.data && artists.data && (
        <AlbumDetails album={album.data} albumArtists={artists.data} />
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper(Album);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
