import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../HOCs/ScreenWrapper";
import useFetchElectro from "~/Hooks/Music/Playlists/useFetchElectro";
import useFetchHipHop from "~/Hooks/Music/Playlists/useFetchHipHop";
import useFetchTopArtists from "~/Hooks/Music/TopArtists/useFetchTopArtists";
import useFetchPlaylist from "~/Hooks/Music/useFetchPlaylist";
import useFetchAlbum from "~/Hooks/Music/Album/useFetchAlbum";
import useFetchAlbumTracks from "~/Hooks/Music/Album/useFetchAlbumTracks";
import useFetchAlbumArtists from "~/Hooks/Music/Album/useFetchAlbumArtists";
import { getArtistIds } from "~/Utils/Funcs";
import useFetchLatestAlbums from "~/Hooks/Music/Album/useFetchLatestAlbums";

const music = () => {
  const album = useFetchLatestAlbums()
  return (
    <View>
      <Text style={{ color: "white" }}>{"hie"}</Text>
    </View>
  );
};

export default ScreenWrapper(music);

const styles = StyleSheet.create({});
