import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchArtistAlbums from "~/src/Hooks/Music/Artists/useFetchArtistAlbums";
import useFetchArtistbyId from "~/src/Hooks/Music/Artists/useFetchArtistbyId";
import useFetchArtistTopTracks from "~/src/Hooks/Music/Artists/useFetchArtistTopTracks";
import useFetchRelatedArtists from "~/src/Hooks/Music/Artists/useFetchRelatedArtists";
import ArtistDetails from "./ArtistDetails/ArtistDetails";

const Artist = () => {
  const { id } = useLocalSearchParams();
  const processedId = id ? (Array.isArray(id) ? "" : id) : "";
  const albums = useFetchArtistAlbums(processedId);
  const topTracks = useFetchArtistTopTracks(processedId);
  const profile = useFetchArtistbyId(processedId);
  const relatedArtists = useFetchRelatedArtists(processedId);
  const isLoading = () => {
    if (
      albums.isLoading ||
      topTracks.isLoading ||
      profile.isLoading ||
      relatedArtists.isLoading
    )
      return true;
    else return false;
  };
  const hasError = () => {
    if (
      albums.error ||
      topTracks.error ||
      profile.error ||
      relatedArtists.error
    )
      return true;
    else return false;
  };
  const isdataLoaded = () => {
    if (albums.data && topTracks.data && profile.data && relatedArtists.data)
      return true;
    else return false;
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading() && <ScreenSpinner />}
      {hasError() && <HttpError />}
      {isdataLoaded() && (
        <ArtistDetails
          albums={albums.data ? albums.data : []}
          profile={profile.data}
          tracks={topTracks.data ? topTracks.data : []}
          relatedArtists={relatedArtists.data ? relatedArtists.data : []}
        />
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper(Artist);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
