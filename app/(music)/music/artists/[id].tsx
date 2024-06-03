import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchArtistAlbums from "~/Hooks/Music/Artists/useFetchArtistAlbums";
import useFetchArtistTopTracks from "~/Hooks/Music/Artists/useFetchArtistTopTracks";
import useFetchArtistbyId from "~/Hooks/Music/Artists/useFetchArtistbyId";
import useFetchRelatedArtists from "~/Hooks/Music/Artists/useFetchRelatedArtists";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import HttpError from "~/Components/HttpError/HttpError";
import ArtistDetails from "~/Components/ContentDetails/Music/ArtistDetails";

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
    <SafeAreaView>
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
