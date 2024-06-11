import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";
import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchLatestAlbums from "~/src/Hooks/Music/Album/useFetchLatestAlbums";
import useFetchTopArtists from "~/src/Hooks/Music/Artists/useFetchTopArtists";
import useFetchElectro from "~/src/Hooks/Music/Playlists/useFetchElectro";
import useFetchHipHop from "~/src/Hooks/Music/Playlists/useFetchHipHop";
import useFetchRnB from "~/src/Hooks/Music/Playlists/useFetchRnB";
import useFetchTopList from "~/src/Hooks/Music/Playlists/useFetchTopList";


const Music = () => {
  const latestAlbums = useFetchLatestAlbums();
  const topArtists = useFetchTopArtists();
  const electroPlayLists = useFetchElectro();
  const hipHopPlayLists = useFetchHipHop();
  const trendingPlayLists = useFetchTopList();
  const rnbPlayLists = useFetchRnB();
  const router = useRouter();
  const isLoading = () => {
    if (
      latestAlbums.isLoading ||
      topArtists.isLoading ||
      electroPlayLists.isLoading ||
      hipHopPlayLists.isLoading ||
      trendingPlayLists.isLoading ||
      rnbPlayLists.isLoading
    )
      return true;
    else return false;
  };
  const hasError = () => {
    if (
      latestAlbums.error ||
      topArtists.error ||
      electroPlayLists.error ||
      hipHopPlayLists.error ||
      trendingPlayLists.error ||
      rnbPlayLists.error
    )
      return true;
    else return false;
  };
  const hasData = () => {
    if (
      latestAlbums.data &&
      topArtists.data &&
      electroPlayLists.electroPlaylists &&
      hipHopPlayLists.hipHopPlaylists &&
      trendingPlayLists.data &&
      rnbPlayLists.data
    )
      return true;
    else return false;
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {hasError() && <HttpError />}
      {isLoading() && <ScreenSpinner />}
      {hasData() && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Swipeable
            type="artist"
            content={topArtists.data}
            headerTitle="Top Artists"
            seeAllRouteFunc={() => router.push("music/artists/trending")}
          />
          <Swipeable
            type="album"
            content={latestAlbums.data ? latestAlbums.data : []}
            headerTitle="Latest Albums"
            seeAllRouteFunc={() => router.push("music/albums/latest")}
          />
          <Swipeable
            type="playlist"
            content={trendingPlayLists.data}
            headerTitle="Trending Playlists"
            seeAllRouteFunc={() => router.push("music/playlists/trending")}
          />
          <Swipeable
            type="playlist"
            content={electroPlayLists.electroPlaylists}
            headerTitle="Electro Playlists"
            seeAllRouteFunc={() => router.push("music/playlists/electro")}
          />
          <Swipeable
            type="playlist"
            content={hipHopPlayLists.hipHopPlaylists}
            headerTitle="Hip Hop Playlists"
            seeAllRouteFunc={() => router.push("music/playlists/hiphop")}
          />
          <Swipeable
            type="playlist"
            content={rnbPlayLists.data}
            headerTitle="RNB Playlists"
            seeAllRouteFunc={() => router.push("music/playlists/rnb")}
          />
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(Music);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});