import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Redirect } from "expo-router";

import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import { useAppSelector } from "~/src/Redux/Hooks/Hooks";
import Movies from "./Components/Movies/Movies";
import Tracks from "./Components/Tracks/Tracks";
import TvShows from "./Components/TvShows/TvShows";
import ContentList from "./Components/ContentList/ContentList";
import { IFavoriteContentType } from "./Types/Types";
import Actors from "./Components/Actors/Actors";
import Albums from "./Components/Albums/Albums";
import Artists from "./Components/Artists/Artists";

const favorites = () => {
  const [currentContentType, setCurrentContentType] =
    useState<IFavoriteContentType>("Movies");
  const accessToken = useAppSelector((state) => state.accessToken);
  const contentType: IFavoriteContentType[] = [
    "Movies",
    "Tracks",
    "TvShows",
    "Albums",
    "Actors",
    "Artists",
  ];
  const { container } = styles;
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      {!accessToken ? (
        <Redirect href={"/login"} />
      ) : (
        <View style={container}>
          <ContentList
            contentType={contentType}
            setCurrentContentType={setCurrentContentType}
            currentContentType={currentContentType}
          />
          {currentContentType === "Movies" && <Movies />}
          {currentContentType === "Tracks" && <Tracks />}
          {currentContentType === "TvShows" && <TvShows />}
          {currentContentType === "Actors" && <Actors/>}
          {currentContentType === "Albums" && <Albums/>}
          {currentContentType === "Artists" && <Artists/>}
        </View>
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(favorites);

const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingHorizontal: 5,
  },
});
