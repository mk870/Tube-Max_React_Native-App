import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../HOCs/ScreenWrapper";
import useFetchPopularShows from "~/Hooks/TvShows/useFetchPopularShows";
import useFetchTopRatedShows from "~/Hooks/TvShows/useFetchTopRatedShows";
import useFetchShowsOnAir from "~/Hooks/TvShows/useFetchShowsOnAir";
import useFetchShowById from "~/Hooks/TvShows/useFetchShowById";
import useFetchSeason from "~/Hooks/TvShows/useFetchSeason";
import useFetchEpisode from "~/Hooks/TvShows/useFetchEpisode";
import useFetchShowRecommendations from "~/Hooks/TvShows/useFetchShowRecommendations";
import useFetchShowReviews from "~/Hooks/TvShows/useFetchShowReviews";

const tv = () => {
  const { reviews} = useFetchShowReviews(1396);
  return (
    <View>
      <Text style={{ color: "white" }}>{reviews && "hie"}</Text>
    </View>
  );
};

export default ScreenWrapper(tv);

const styles = StyleSheet.create({});
