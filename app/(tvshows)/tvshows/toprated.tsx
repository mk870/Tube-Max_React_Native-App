import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchMoreShows from "~/Hooks/TvShows/useFetchMoreShows";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";

const toprated = () => {
  const { data, isLoading, error } = useFetchMoreShows("top_rated");
  return (
    <View
      style={styles.container}
    >
      { isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="tvShow" content={data} />}
    </View>
  );
};

export default ScreenWrapper(toprated);
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1
  },
});
