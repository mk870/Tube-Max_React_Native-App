import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../HOCs/ScreenWrapper";
import useFetchElectro from "~/Hooks/Music/Playlists/useFetchElectro";
import useFetchHipHop from "~/Hooks/Music/Playlists/useFetchHipHop";
import useFetchTopArtists from "~/Hooks/Music/Artists/useFetchTopArtists";
import useFetchPlaylist from "~/Hooks/Music/Playlists/useFetchPlaylist";
const music = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>{"hie"}</Text>
    </View>
  );
};

export default ScreenWrapper(music);

const styles = StyleSheet.create({});
